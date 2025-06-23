#!/usr/bin/env python3
"""
Simple wrapper script to run the CodeScan rule checker with preconfigured settings
for the will-obrien-codescan-allrules project.

Usage:
    python run_check.py --api-key YOUR_API_KEY
    python run_check.py --api-token YOUR_API_TOKEN
"""

import argparse
import sys
from check_rules_status import CodeScanRuleChecker

def main():
    parser = argparse.ArgumentParser(
        description="Run CodeScan rule status check for will-obrien-codescan-allrules project"
    )
    
    # Authentication (required)
    auth_group = parser.add_mutually_exclusive_group(required=True)
    auth_group.add_argument('--api-key', help='CodeScan API key')
    auth_group.add_argument('--api-token', help='CodeScan API token')
    
    # Optional parameters
    parser.add_argument('--csv-file', help='Check specific CSV file (default: check all CSV files)')
    parser.add_argument('--output-dir', default='reports', help='Directory to save reports (default: reports)')
    
    args = parser.parse_args()
    
    # Preconfigured settings
    API_URL = "https://app.codescan.io"
    PROJECT_KEY = "will-obrien-codescan-allrules"
    
    print("CodeScan Rule Status Checker")
    print("=" * 40)
    print(f"API URL: {API_URL}")
    print(f"Project: {PROJECT_KEY}")
    print(f"Output Directory: {args.output_dir}")
    print()
    
    # Create checker instance
    checker = CodeScanRuleChecker(
        api_url=API_URL,
        api_key=args.api_key,
        api_token=args.api_token
    )
    
    # Determine what to check
    csv_path = args.csv_file if args.csv_file else "."
    
    try:
        checker.run_check(csv_path, PROJECT_KEY, args.output_dir)
        print("\n" + "=" * 50)
        print("Check completed successfully!")
        print(f"Reports saved in: {args.output_dir}/")
    except KeyboardInterrupt:
        print("\nOperation cancelled by user")
        sys.exit(1)
    except Exception as e:
        print(f"Unexpected error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main() 