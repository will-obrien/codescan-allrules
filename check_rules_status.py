#!/usr/bin/env python3
"""
CodeScan Rule Status Checker

This script compares rules_key values from CSV files against CodeScan API results
to identify which rules are not being fired/triggered.

Usage:
    python check_rules_status.py --csv-file apex.csv --api-url <codescan_api_url> --api-key <your_api_key>
    python check_rules_status.py --csv-dir . --api-url <codescan_api_url> --api-key <your_api_key>
"""

import argparse
import csv
import json
import os
import sys
import requests
from pathlib import Path
from typing import Dict, List, Set, Optional
import time


class CodeScanRuleChecker:
    def __init__(self, api_url: str, api_key: Optional[str] = None, api_token: Optional[str] = None):
        """
        Initialize the CodeScan Rule Checker
        
        Args:
            api_url: CodeScan API endpoint URL
            api_key: API key for authentication (if required)
            api_token: API token for authentication (if required)
        """
        self.api_url = api_url.rstrip('/')
        self.api_key = api_key
        self.api_token = api_token
        self.session = requests.Session()
        
        # Set up authentication headers
        if api_key:
            # CodeScan uses token-based authentication
            if api_key.startswith('squ_'):
                self.session.headers.update({'Authorization': f'Bearer {api_key}'})
            else:
                self.session.headers.update({'X-API-Key': api_key})
        elif api_token:
            self.session.headers.update({'Authorization': f'Bearer {api_token}'})
    
    def get_csv_files(self, path: str) -> List[Path]:
        """
        Get list of CSV files from a file or directory
        
        Args:
            path: Path to CSV file or directory containing CSV files
            
        Returns:
            List of Path objects for CSV files
        """
        path_obj = Path(path)
        
        if path_obj.is_file() and path_obj.suffix.lower() == '.csv':
            return [path_obj]
        elif path_obj.is_dir():
            return list(path_obj.glob('*.csv'))
        else:
            print(f"Error: {path} is not a valid CSV file or directory")
            return []
    
    def read_rules_from_csv(self, csv_file: Path) -> Set[str]:
        """
        Read rules_key values from a CSV file
        
        Args:
            csv_file: Path to CSV file
            
        Returns:
            Set of rules_key values
        """
        rules_keys = set()
        
        try:
            with open(csv_file, 'r', encoding='utf-8-sig') as file:  # utf-8-sig handles BOM
                reader = csv.DictReader(file)
                
                # Clean fieldnames to handle any remaining BOM or whitespace issues
                if reader.fieldnames:
                    reader.fieldnames = [name.strip().lstrip('\ufeff') for name in reader.fieldnames]
                
                if 'rules_key' not in reader.fieldnames:
                    print(f"Warning: 'rules_key' column not found in {csv_file}")
                    print(f"Available columns: {reader.fieldnames}")
                    return rules_keys
                
                for row in reader:
                    rule_key = row['rules_key'].strip()
                    if rule_key:
                        rules_keys.add(rule_key)
                        
        except Exception as e:
            print(f"Error reading {csv_file}: {e}")
            
        return rules_keys
    
    def get_fired_rules_from_api(self, project_key: Optional[str] = None) -> Set[str]:
        """
        Get fired/triggered rules from CodeScan API
        
        Args:
            project_key: Optional project key to filter results
            
        Returns:
            Set of fired rule keys
        """
        fired_rules = set()
        
        try:
            # Primary endpoint for CodeScan issues
            primary_endpoint = f"{self.api_url}/api/issues/search"
            
            # Fallback endpoints if primary fails
            fallback_endpoints = [
                f"{self.api_url}/api/rules/search",
                f"{self.api_url}/api/measures/component",
                f"{self.api_url}/api/qualityprofiles/search"
            ]
            
            endpoints_to_try = [primary_endpoint] + fallback_endpoints
            
            params = {
                'ps': 500,  # Page size - get more results per request
                'p': 1      # Page number
            }
            if project_key:
                params['projects'] = project_key  # Use 'projects' parameter for issues/search
            
            for endpoint in endpoints_to_try:
                try:
                    print(f"Trying API endpoint: {endpoint}")
                    
                    # Handle pagination for issues/search endpoint
                    if endpoint == primary_endpoint:
                        fired_rules.update(self._get_paginated_issues(endpoint, params))
                        if fired_rules:
                            break
                    else:
                        response = self.session.get(endpoint, params=params, timeout=30)
                        
                        if response.status_code == 200:
                            data = response.json()
                            print(f"Successfully connected to {endpoint}")
                            
                            # Extract rule keys from different possible response formats
                            fired_rules.update(self._extract_rule_keys_from_response(data))
                            
                            if fired_rules:
                                break
                                
                        elif response.status_code == 401:
                            print(f"Authentication failed for {endpoint}")
                        elif response.status_code == 404:
                            print(f"Endpoint not found: {endpoint}")
                        else:
                            print(f"API request failed with status {response.status_code}: {endpoint}")
                        
                except requests.exceptions.RequestException as e:
                    print(f"Request failed for {endpoint}: {e}")
                    continue
            
            if not fired_rules:
                print("Warning: No fired rules found from API. Please check:")
                print("1. API URL is correct")
                print("2. Authentication credentials are valid")
                print("3. Project has been scanned and has results")
                
        except Exception as e:
            print(f"Error fetching data from API: {e}")
            
        return fired_rules
    
    def _get_paginated_issues(self, endpoint: str, base_params: Dict) -> Set[str]:
        """
        Get all issues from CodeScan API with pagination support
        
        Args:
            endpoint: API endpoint URL
            base_params: Base parameters for the request
            
        Returns:
            Set of fired rule keys from all pages
        """
        all_rule_keys = set()
        page = 1
        
        while True:
            params = base_params.copy()
            params['p'] = page
            
            try:
                print(f"Fetching page {page} from issues API...")
                response = self.session.get(endpoint, params=params, timeout=30)
                
                if response.status_code == 200:
                    data = response.json()
                    
                    if page == 1:
                        print(f"Successfully connected to {endpoint}")
                        total_issues = data.get('total', 0)
                        print(f"Total issues found: {total_issues}")
                    
                    # Extract rule keys from this page
                    page_rules = self._extract_rule_keys_from_response(data)
                    all_rule_keys.update(page_rules)
                    
                    # Check if we have more pages
                    paging = data.get('paging', {})
                    page_index = paging.get('pageIndex', page)
                    page_size = paging.get('pageSize', params.get('ps', 100))
                    total = paging.get('total', data.get('total', 0))
                    
                    print(f"Page {page}: Found {len(page_rules)} unique rules")
                    
                    # Check if we've reached the last page
                    if page_index * page_size >= total or len(data.get('issues', [])) == 0:
                        break
                    
                    page += 1
                    
                elif response.status_code == 401:
                    print(f"Authentication failed for {endpoint}")
                    break
                elif response.status_code == 404:
                    print(f"Endpoint not found: {endpoint}")
                    break
                else:
                    print(f"API request failed with status {response.status_code}: {endpoint}")
                    print(f"Response: {response.text[:200]}...")
                    break
                    
            except requests.exceptions.RequestException as e:
                print(f"Request failed for {endpoint} page {page}: {e}")
                break
        
        print(f"Total unique rule keys found: {len(all_rule_keys)}")
        return all_rule_keys
    
    def _extract_rule_keys_from_response(self, data: Dict) -> Set[str]:
        """
        Extract rule keys from API response data
        
        Args:
            data: JSON response from API
            
        Returns:
            Set of rule keys found in the response
        """
        rule_keys = set()
        
        # Handle different possible response formats
        if isinstance(data, dict):
            # Check for issues format (common in SonarQube-style APIs)
            if 'issues' in data:
                for issue in data['issues']:
                    if 'rule' in issue:
                        rule_keys.add(issue['rule'])
                    elif 'ruleKey' in issue:
                        rule_keys.add(issue['ruleKey'])
            
            # Check for rules format
            elif 'rules' in data:
                for rule in data['rules']:
                    if 'key' in rule:
                        rule_keys.add(rule['key'])
                    elif 'ruleKey' in rule:
                        rule_keys.add(rule['ruleKey'])
            
            # Check for components format
            elif 'component' in data and 'measures' in data:
                # This might contain rule violation information
                pass
            
            # Generic search through all values
            else:
                rule_keys.update(self._find_rule_keys_recursively(data))
        
        return rule_keys
    
    def _find_rule_keys_recursively(self, obj, rule_keys: Optional[Set] = None) -> Set[str]:
        """
        Recursively search for rule keys in nested data structures
        
        Args:
            obj: Object to search through
            rule_keys: Set to accumulate found rule keys
            
        Returns:
            Set of found rule keys
        """
        if rule_keys is None:
            rule_keys = set()
        
        if isinstance(obj, dict):
            for key, value in obj.items():
                if key in ['rule', 'ruleKey', 'key'] and isinstance(value, str):
                    # Check if it looks like a rule key (contains colon)
                    if ':' in value:
                        rule_keys.add(value)
                elif isinstance(value, (dict, list)):
                    self._find_rule_keys_recursively(value, rule_keys)
        elif isinstance(obj, list):
            for item in obj:
                if isinstance(item, (dict, list)):
                    self._find_rule_keys_recursively(item, rule_keys)
        
        return rule_keys
    
    def compare_rules(self, csv_rules: Set[str], fired_rules: Set[str]) -> Dict[str, Set[str]]:
        """
        Compare CSV rules against fired rules
        
        Args:
            csv_rules: Set of rules from CSV files
            fired_rules: Set of fired rules from API
            
        Returns:
            Dictionary with comparison results
        """
        return {
            'not_fired': csv_rules - fired_rules,
            'fired': csv_rules & fired_rules,
            'csv_only': csv_rules - fired_rules,
            'api_only': fired_rules - csv_rules
        }
    
    def generate_report(self, csv_file: str, results: Dict[str, Set[str]], output_file: Optional[str] = None):
        """
        Generate and save a detailed report
        
        Args:
            csv_file: Name of the CSV file processed
            results: Comparison results
            output_file: Optional output file path
        """
        report_lines = []
        report_lines.append(f"CodeScan Rule Status Report")
        report_lines.append(f"=" * 50)
        report_lines.append(f"CSV File: {csv_file}")
        report_lines.append(f"Generated: {time.strftime('%Y-%m-%d %H:%M:%S')}")
        report_lines.append("")
        
        report_lines.append(f"Summary:")
        report_lines.append(f"  Total rules in CSV: {len(results['fired']) + len(results['not_fired'])}")
        report_lines.append(f"  Rules fired: {len(results['fired'])}")
        report_lines.append(f"  Rules NOT fired: {len(results['not_fired'])}")
        report_lines.append("")
        
        if results['not_fired']:
            report_lines.append("Rules NOT fired (need examples created):")
            report_lines.append("-" * 40)
            for rule in sorted(results['not_fired']):
                report_lines.append(f"  - {rule}")
            report_lines.append("")
        
        if results['fired']:
            report_lines.append("Rules that are fired:")
            report_lines.append("-" * 25)
            for rule in sorted(results['fired']):
                report_lines.append(f"  - {rule}")
            report_lines.append("")
        
        report_content = "\n".join(report_lines)
        
        if output_file:
            try:
                with open(output_file, 'w', encoding='utf-8') as f:
                    f.write(report_content)
                print(f"Report saved to: {output_file}")
            except Exception as e:
                print(f"Error saving report: {e}")
        
        print(report_content)
    
    def run_check(self, csv_path: str, project_key: Optional[str] = None, output_dir: Optional[str] = None):
        """
        Main method to run the rule status check
        
        Args:
            csv_path: Path to CSV file or directory
            project_key: Optional CodeScan project key
            output_dir: Optional directory to save reports
        """
        csv_files = self.get_csv_files(csv_path)
        
        if not csv_files:
            print("No CSV files found to process")
            return
        
        print(f"Found {len(csv_files)} CSV file(s) to process")
        
        # Get fired rules from API once (assuming same project)
        print("Fetching fired rules from CodeScan API...")
        fired_rules = self.get_fired_rules_from_api(project_key)
        print(f"Found {len(fired_rules)} fired rules from API")
        
        # Process each CSV file
        for csv_file in csv_files:
            print(f"\nProcessing: {csv_file.name}")
            
            # Read rules from CSV
            csv_rules = self.read_rules_from_csv(csv_file)
            print(f"Found {len(csv_rules)} rules in {csv_file.name}")
            
            if not csv_rules:
                print(f"No rules found in {csv_file.name}, skipping...")
                continue
            
            # Compare rules
            results = self.compare_rules(csv_rules, fired_rules)
            
            # Generate report
            output_file = None
            if output_dir:
                output_dir_path = Path(output_dir)
                output_dir_path.mkdir(exist_ok=True)
                output_file = output_dir_path / f"rule_status_report_{csv_file.stem}.txt"
            
            self.generate_report(csv_file.name, results, output_file)


def main():
    parser = argparse.ArgumentParser(
        description="Check which rules from CSV files are not being fired in CodeScan",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Check single CSV file
  python check_rules_status.py --csv-file apex.csv --api-url https://your-codescan-instance.com --api-key YOUR_API_KEY
  
  # Check all CSV files in current directory
  python check_rules_status.py --csv-dir . --api-url https://your-codescan-instance.com --api-token YOUR_TOKEN
  
  # Check with project key and save reports
  python check_rules_status.py --csv-file apex.csv --api-url https://your-codescan-instance.com --api-key YOUR_KEY --project-key my-project --output-dir reports
        """
    )
    
    # Input options
    input_group = parser.add_mutually_exclusive_group(required=True)
    input_group.add_argument('--csv-file', help='Path to single CSV file')
    input_group.add_argument('--csv-dir', help='Path to directory containing CSV files')
    
    # API configuration
    parser.add_argument('--api-url', required=True, help='CodeScan API base URL')
    
    auth_group = parser.add_mutually_exclusive_group()
    auth_group.add_argument('--api-key', help='CodeScan API key')
    auth_group.add_argument('--api-token', help='CodeScan API token')
    
    # Optional parameters
    parser.add_argument('--project-key', help='CodeScan project key to filter results')
    parser.add_argument('--output-dir', help='Directory to save report files')
    
    args = parser.parse_args()
    
    # Determine CSV path
    csv_path = args.csv_file if args.csv_file else args.csv_dir
    
    # Create checker instance
    checker = CodeScanRuleChecker(
        api_url=args.api_url,
        api_key=args.api_key,
        api_token=args.api_token
    )
    
    # Run the check
    try:
        checker.run_check(csv_path, args.project_key, args.output_dir)
    except KeyboardInterrupt:
        print("\nOperation cancelled by user")
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main() 