#!/usr/bin/env python3
"""
Generate SonarJS Rule Trigger Files

This script reads CSV files from ./sonarjs-split directory and creates Lightning Web Component
JavaScript files that would trigger each SonarJS rule violation for code scanning software testing.
"""

import csv
import os
import re
from pathlib import Path


class SonarJSRuleTriggerGenerator:
    """Generates Lightning Web Component JavaScript files that trigger specific SonarJS rules."""
    
    def __init__(self, csv_dir='sonarjs-split', output_dir='force-app/main/default/lwc'):
        self.csv_dir = Path(csv_dir)
        self.output_dir = Path(output_dir)
        self.rule_counter = 1
        
    def create_salesforce_structure(self):
        """Create the proper Salesforce directory structure."""
        directories = [
            'force-app/main/default/lwc',
            'force-app/main/default/aura',
        ]
        
        for directory in directories:
            Path(directory).mkdir(parents=True, exist_ok=True)
            
    def sanitize_component_name(self, rule_key, rule_name):
        """Generate a valid Lightning Web Component name from rule key and name."""
        # Remove prefixes and special characters
        clean_key = re.sub(r'^(javascript:|sonarjs:)', '', rule_key)
        clean_key = re.sub(r'[^a-zA-Z0-9]', '', clean_key)
        
        # Ensure it starts with a lowercase letter and is camelCase
        if not clean_key or not clean_key[0].isalpha():
            clean_key = f"sonar{self.rule_counter:03d}{clean_key}"
            
        # Convert to camelCase and ensure it starts with lowercase
        clean_key = clean_key[0].lower() + clean_key[1:] if clean_key else f"sonar{self.rule_counter:03d}"
        
        # Limit length to reasonable size
        if len(clean_key) > 35:
            clean_key = clean_key[:35]
            
        return f"{clean_key}Trigger"
    
    def generate_javascript_code_for_rule(self, rule_key, rule_name, rule_desc, severity):
        """Generate JavaScript code that would trigger the specific SonarJS rule."""
        
        # Extract rule number for specific templates
        rule_match = re.search(r'S(\d+)', rule_key)
        rule_number = rule_match.group(1) if rule_match else None
        
        rule_templates = {
            # S1488: Local variables should not be declared and then immediately returned
            '1488': '''// This component triggers SonarJS rule S1488
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    computeDurationInMilliseconds() {{
        var duration = (((10 * 60) + 30) * 60 + 45) * 1000; // Triggers S1488
        return duration; // Variable declared and immediately returned
    }}
    
    getValue() {{
        var result = 42; // Triggers S1488
        return result; // Bad practice
    }}
}}''',
            
            # S1994: For loop increment clauses should modify the loops' counters
            '1994': '''// This component triggers SonarJS rule S1994
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    badForLoop() {{
        let i, j = 0;
        for (i = 0; i < 10; j++) {{ // Triggers S1994 - wrong counter incremented
            console.log(i);
            i++; // Counter incremented outside increment clause
        }}
    }}
}}''',
            
            # S1774: The ternary operator should not be used
            '1774': '''// This component triggers SonarJS rule S1774
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    checkValue(a) {{
        var b = (a === 'A') ? 'is A' : 'is not A'; // Triggers S1774
        return b;
    }}
    
    getStatus(condition) {{
        return condition ? 'active' : 'inactive'; // Triggers S1774
    }}
}}''',
            
            # S139: Comments should not be located at the end of lines of code
            '139': '''// This component triggers SonarJS rule S139
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        var a1 = 5 + 3; // This is a trailing comment that triggers S139
        var b2 = 10 * 2; // Another trailing comment
        var c3 = a1 + b2; // Yet another trailing comment
    }}
}}''',
            
            # S3760: Arithmetic operators should only have numbers as operands
            '3760': '''// This component triggers SonarJS rule S3760
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    badArithmetic() {{
        let str = "80";
        let quarter = str / 4; // Triggers S3760 - string used in arithmetic
        
        if (str < 10) {{ // Triggers S3760 - string comparison
            console.log('Less than 10');
        }}
    }}
}}''',
            
            # S1186: Functions should not be empty
            '1186': '''// This component triggers SonarJS rule S1186
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    emptyFunction() {{
        // Triggers S1186 - empty function
    }}
    
    anotherEmptyFunction() {{
    }}
}}''',
            
            # S2432: Setters should not return values
            '2432': '''// This component triggers SonarJS rule S2432
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    _name = '';
    
    set name(value) {{
        this._name = value;
        return 42; // Triggers S2432 - setter returning value
    }}
    
    get name() {{
        return this._name;
    }}
}}''',
            
            # S3403: Strict equality operators should not be used with dissimilar types
            '3403': '''// This component triggers SonarJS rule S3403
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    checkTypes() {{
        var a = 8;
        var b = "8";
        
        if (a === b) {{ // Triggers S3403 - comparing number with string
            console.log('Never executes');
        }}
        
        if (true === "true") {{ // Triggers S3403 - comparing boolean with string
            console.log('Never executes');
        }}
    }}
}}''',
            
            # S107: Functions should not have too many parameters
            '107': '''// This component triggers SonarJS rule S107
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    // Triggers S107 - too many parameters (more than 4)
    doSomething(param1, param2, param3, param4, param5, param6) {{
        console.log(param1, param2, param3, param4, param5, param6);
    }}
}}''',
            
            # S1438: Statements should end with semicolons
            '1438': '''// This component triggers SonarJS rule S1438
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    badSemicolons() {{
        var a = 5 // Triggers S1438 - missing semicolon
        var b = 10 // Triggers S1438 - missing semicolon
        return a + b // Triggers S1438 - missing semicolon
    }}
}}''',
            
            # S1441: Quotes for string literals should be used consistently
            '1441': '''// This component triggers SonarJS rule S1441
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    inconsistentQuotes() {{
        var single = 'single quotes';
        var double = "double quotes"; // Triggers S1441 - inconsistent quotes
        var mixed = 'another' + "mixed"; // Triggers S1441
    }}
}}''',
            
            # S3812: Results of "in" and "instanceof" should be negated rather than operands
            '3812': '''// This component triggers SonarJS rule S3812
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    badNegation() {{
        var myObj = {{ prop: true }};
        var foo = new Date();
        
        if (!"prop" in myObj) {{ // Triggers S3812
            console.log('Never executes');
        }}
        
        if (!foo instanceof Date) {{ // Triggers S3812
            console.log('Never executes');
        }}
    }}
}}''',
            
            # S1539: "strict" mode should be used with caution
            '1539': '''// This component triggers SonarJS rule S1539
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    strictFunction() {{
        'use strict'; // Triggers S1539
        var a = 10;
        return a;
    }}
}}''',
            
            # S3686: Functions should not be called both with and without "new"
            '3686': '''// This component triggers SonarJS rule S3686
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    confusingConstructor() {{
        function getNum() {{
            return 5;
        }}
        
        var myFirstNum = getNum();
        var my2ndNum = new getNum(); // Triggers S3686 - inconsistent usage
    }}
}}''',
            
            # S100: Function and method names should comply with a naming convention
            '100': '''// This component triggers SonarJS rule S100
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    DoSomething() {{ // Triggers S100 - should be camelCase
        console.log('Bad naming');
    }}
    
    Another_Bad_Name() {{ // Triggers S100 - underscores not allowed
        console.log('Another bad name');
    }}
}}''',
            
            # S105: Tabulation characters should not be used
            '105': '''// This component triggers SonarJS rule S105
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    badIndentation() {{
		var a = 10;	// Triggers S105 - tabs used instead of spaces
		if (a > 5) {{
			console.log('Using tabs');	// Triggers S105
		}}
    }}
}}''',
            
            # S3786: Template literal placeholder syntax should not be used in regular strings
            '3786': '''// This component triggers SonarJS rule S3786
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        var date = new Date();
        console.log("Today is ${{date}}"); // Triggers S3786 - should use backticks
        var name = "John";
        console.log("Hello ${{name}}!"); // Triggers S3786
    }}
}}''',
            
            # S1541: Cyclomatic Complexity of functions should not be too high
            '1541': '''// This component triggers SonarJS rule S1541
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    complexFunction(a, b, c, d, e) {{ // Triggers S1541 - high complexity
        if (a > 0) {{
            if (b > 0) {{
                if (c > 0) {{
                    if (d > 0) {{
                        if (e > 0) {{
                            return 'all positive';
                        }} else {{
                            return 'e negative';
                        }}
                    }} else {{
                        return 'd negative';
                    }}
                }} else {{
                    return 'c negative';
                }}
            }} else {{
                return 'b negative';
            }}
        }} else {{
            return 'a negative';
        }}
    }}
}}''',
        }
        
        # Get template based on rule number
        template = None
        if rule_number and rule_number in rule_templates:
            template = rule_templates[rule_number]
        
        if not template:
            # Default template for unknown SonarJS rules
            template = '''// This component is generated to trigger the SonarJS rule: {rule_key}
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    // Rule: {rule_name}
    connectedCallback() {{
        // This component triggers: {rule_key}
        console.log('Triggering SonarJS rule: {rule_key}');
        
        // Example code that might trigger the rule
        var example = "This triggers rule {rule_key}";
        return example;
    }}
}}'''
        
        return template.format(
            class_name=self.sanitize_component_name(rule_key, rule_name),
            rule_key=rule_key,
            rule_name=rule_name
        )
    
    def generate_component_html(self, component_name):
        """Generate the HTML template for the Lightning Web Component."""
        return f'''<template>
    <div class="slds-box slds-theme_default">
        <h2>SonarJS Rule Trigger: {component_name}</h2>
        <p>This component is designed to trigger specific SonarJS rules for testing purposes.</p>
    </div>
</template>'''
    
    def generate_component_meta(self, component_name):
        """Generate the .js-meta.xml file for the component."""
        return f'''<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion>
    <isExposed>false</isExposed>
    <description>Component that triggers SonarJS rule violations for testing</description>
</LightningComponentBundle>'''
    
    def process_csv_files(self):
        """Process all CSV files and generate trigger components."""
        if not self.csv_dir.exists():
            print(f"Directory {self.csv_dir} does not exist!")
            return
        
        self.create_salesforce_structure()
        
        csv_files = list(self.csv_dir.glob('*.csv'))
        total_rules = 0
        
        print(f"Processing {len(csv_files)} CSV files...")
        
        for csv_file in sorted(csv_files):
            print(f"Processing {csv_file.name}...")
            file_rules = 0
            
            try:
                with open(csv_file, 'r', encoding='utf-8-sig') as file:
                    reader = csv.DictReader(file, quoting=csv.QUOTE_MINIMAL)
                    
                    for row_num, row in enumerate(reader, start=2):
                        try:
                            if not row.get('rules_key') or not row['rules_key'].strip():
                                continue
                                
                            rule_key = row['rules_key'].strip()
                            rule_name = row.get('rules_name', '').strip()
                            rule_desc = row.get('rules_mdDesc', '').strip()
                            severity = row.get('rules_severity', '').strip()
                            
                            if not rule_key:
                                continue
                            
                            # Generate component name
                            component_name = self.sanitize_component_name(rule_key, rule_name)
                            
                            # Create component directory
                            component_dir = self.output_dir / component_name
                            component_dir.mkdir(parents=True, exist_ok=True)
                            
                            # Generate JavaScript code
                            js_code = self.generate_javascript_code_for_rule(rule_key, rule_name, rule_desc, severity)
                            
                            # Write .js file
                            js_file = component_dir / f"{component_name}.js"
                            with open(js_file, 'w', encoding='utf-8') as f:
                                f.write(js_code)
                            
                            # Write .html file
                            html_file = component_dir / f"{component_name}.html"
                            with open(html_file, 'w', encoding='utf-8') as f:
                                f.write(self.generate_component_html(component_name))
                            
                            # Write .js-meta.xml file
                            meta_file = component_dir / f"{component_name}.js-meta.xml"
                            with open(meta_file, 'w', encoding='utf-8') as f:
                                f.write(self.generate_component_meta(component_name))
                            
                            total_rules += 1
                            file_rules += 1
                            self.rule_counter += 1
                            
                            print(f"  Created: {component_name} (Rule: {rule_key})")
                            
                        except Exception as e:
                            print(f"  Error processing row {row_num}: {e}")
                            continue
                    
                    print(f"  Processed {file_rules} rules from {csv_file.name}")
                            
            except Exception as e:
                print(f"  Error reading {csv_file.name}: {e}")
        
        print(f"\n✅ Successfully generated {total_rules} SonarJS Lightning Web Components!")
        print(f"📁 Components created in: {self.output_dir}")


def main():
    """Main function to generate SonarJS rule trigger files."""
    generator = SonarJSRuleTriggerGenerator()
    generator.process_csv_files()


if __name__ == "__main__":
    main() 