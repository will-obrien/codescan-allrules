#!/usr/bin/env python3
"""
CSV File Splitter

This script splits large CSV files into smaller files with a specified number of rows per file.
The header row is preserved in each output file.
"""

import csv
import os
import argparse
import sys
from pathlib import Path


def split_csv(input_file, rows_per_file=10, output_dir=None):
    """
    Split a CSV file into multiple smaller files.
    
    Args:
        input_file (str): Path to the input CSV file
        rows_per_file (int): Number of rows per output file (default: 10)
        output_dir (str): Directory to save output files (default: same as input file)
    
    Returns:
        list: List of created output file paths
    """
    input_path = Path(input_file)
    
    # Validate input file exists
    if not input_path.exists():
        raise FileNotFoundError(f"Input file not found: {input_file}")
    
    # Set output directory
    if output_dir is None:
        output_dir = input_path.parent
    else:
        output_dir = Path(output_dir)
        output_dir.mkdir(parents=True, exist_ok=True)
    
    # Generate base name for output files
    base_name = input_path.stem
    file_extension = input_path.suffix
    
    output_files = []
    
    try:
        with open(input_file, 'r', newline='', encoding='utf-8') as infile:
            reader = csv.reader(infile)
            
            # Read the header row
            try:
                header = next(reader)
            except StopIteration:
                print(f"Warning: The file {input_file} appears to be empty.")
                return output_files
            
            # Initialize variables for splitting
            current_file_num = 1
            current_row_count = 0
            current_writer = None
            current_outfile = None
            
            for row in reader:
                # Create new output file if needed
                if current_row_count == 0:
                    if current_outfile:
                        current_outfile.close()
                    
                    output_filename = f"{base_name}_part_{current_file_num:03d}{file_extension}"
                    output_path = output_dir / output_filename
                    
                    current_outfile = open(output_path, 'w', newline='', encoding='utf-8')
                    current_writer = csv.writer(current_outfile)
                    
                    # Write header to new file
                    current_writer.writerow(header)
                    
                    output_files.append(str(output_path))
                    print(f"Creating: {output_filename}")
                
                # Write the data row
                current_writer.writerow(row)
                current_row_count += 1
                
                # Check if we've reached the limit for this file
                if current_row_count >= rows_per_file:
                    current_row_count = 0
                    current_file_num += 1
            
            # Close the last file
            if current_outfile:
                current_outfile.close()
    
    except Exception as e:
        print(f"Error processing file: {e}")
        return []
    
    return output_files


def main():
    """Main function to handle command line arguments and execute the split."""
    parser = argparse.ArgumentParser(
        description="Split large CSV files into smaller files with specified number of rows per file.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python csv_splitter.py data.csv                    # Split with 10 rows per file
  python csv_splitter.py data.csv -r 25              # Split with 25 rows per file
  python csv_splitter.py data.csv -o output/         # Specify output directory
  python csv_splitter.py data.csv -r 50 -o splits/  # Custom rows and output directory
        """
    )
    
    parser.add_argument(
        'input_file',
        nargs='?',
        help='Path to the input CSV file'
    )
    
    parser.add_argument(
        '-r', '--rows',
        type=int,
        default=10,
        help='Number of rows per output file (default: 10)'
    )
    
    parser.add_argument(
        '-o', '--output-dir',
        help='Output directory for split files (default: same as input file)'
    )
    
    parser.add_argument(
        '--list-files',
        action='store_true',
        help='List all CSV files in the current directory'
    )
    
    args = parser.parse_args()
    
    # Handle --list-files option
    if args.list_files:
        current_dir = Path('.')
        csv_files = list(current_dir.glob('*.csv'))
        if csv_files:
            print("CSV files found in current directory:")
            for csv_file in sorted(csv_files):
                size = csv_file.stat().st_size
                print(f"  {csv_file.name} ({size:,} bytes)")
        else:
            print("No CSV files found in current directory.")
        return
    
    # Validate arguments
    if not args.input_file and not args.list_files:
        print("Error: input_file is required unless --list-files is used.")
        sys.exit(1)
    
    if args.rows <= 0:
        print("Error: Number of rows must be positive.")
        sys.exit(1)
    
    # Execute the split
    print(f"Splitting {args.input_file} into files with {args.rows} rows each...")
    
    try:
        output_files = split_csv(
            args.input_file,
            rows_per_file=args.rows,
            output_dir=args.output_dir
        )
        
        if output_files:
            print(f"\nSuccessfully created {len(output_files)} files:")
            for file_path in output_files:
                print(f"  {Path(file_path).name}")
        else:
            print("No files were created. Please check the input file.")
    
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main() 