#!/usr/bin/env python3
"""
Generate JavaScript Rule Trigger Files

This script reads CSV files from ./csjs-split directory and creates Lightning Web Component
JavaScript files that would trigger each ESLint rule violation for code scanning software testing.
"""

import csv
import os
import re
from pathlib import Path


class JavaScriptRuleTriggerGenerator:
    """Generates Lightning Web Component JavaScript files that trigger specific ESLint rules."""
    
    def __init__(self, csv_dir='csjs-split', output_dir='force-app/main/default/lwc'):
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
        clean_key = re.sub(r'^(cs-js:|eslint:)', '', rule_key)
        clean_key = re.sub(r'[^a-zA-Z0-9]', '', clean_key)
        
        # Ensure it starts with a lowercase letter and is camelCase
        if not clean_key or not clean_key[0].isalpha():
            clean_key = f"rule{self.rule_counter:03d}{clean_key}"
            
        # Convert to camelCase and ensure it starts with lowercase
        clean_key = clean_key[0].lower() + clean_key[1:] if clean_key else f"rule{self.rule_counter:03d}"
        
        # Limit length to reasonable size
        if len(clean_key) > 35:
            clean_key = clean_key[:35]
            
        return f"{clean_key}Trigger"
    
    def generate_javascript_code_for_rule(self, rule_key, rule_name, rule_desc, severity):
        """Generate JavaScript code that would trigger the specific ESLint rule."""
        
        rule_templates = {
            # Console usage rules
            'no-console': '''// This component triggers the no-console rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        console.log('This console.log triggers the no-console rule'); // Violation
        console.error('Error message'); // Violation
        console.warn('Warning message'); // Violation
    }}
}}''',
            
            # Control regex rules
            'no-control-regex': '''// This component triggers the no-control-regex rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const pattern1 = /\\x1f/; // Control character in regex - triggers rule
        const pattern2 = new RegExp("\\x1f"); // Control character - triggers rule
    }}
}}''',
            
            # Octal escape rules
            'no-octal-escape': '''// This component triggers the no-octal-escape rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const foo = "Copyright \\251"; // Octal escape - triggers rule
    }}
}}''',
            
            # Catch shadow rules
            'no-catch-shadow': '''// This component triggers the no-catch-shadow rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const err = "x";
        try {{
            throw "problem";
        }} catch (err) {{ // Shadows outer variable - triggers rule
            // This shadows the outer err variable
        }}
    }}
}}''',
            
            # Floating decimal rules
            'no-floating-decimal': '''// This component triggers the no-floating-decimal rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const num1 = .5; // Missing leading zero - triggers rule
        const num2 = 2.; // Missing trailing zero - triggers rule
        const num3 = -.7; // Missing leading zero - triggers rule
    }}
}}''',
            
            # New wrappers rules
            'no-new-wrappers': '''// This component triggers the no-new-wrappers rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const stringObject = new String("Hello world"); // Triggers rule
        const numberObject = new Number(33); // Triggers rule
        const booleanObject = new Boolean(false); // Triggers rule
    }}
}}''',
            
            # Shadow restricted names rules
            'no-shadow-restricted-names': '''// This component triggers the no-shadow-restricted-names rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const undefined = "foo"; // Shadows global undefined - triggers rule
        const NaN = 123; // Shadows global NaN - triggers rule
        const Infinity = 456; // Shadows global Infinity - triggers rule
    }}
}}''',
            
            # Empty character class rules
            'no-empty-character-class': '''// This component triggers the no-empty-character-class rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const pattern = /^abc[]/; // Empty character class - triggers rule
        const result = pattern.test("abcdefg");
    }}
}}''',
            
            # New Object rules
            'no-new-object': '''// This component triggers the no-new-object rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const myObject = new Object(); // Triggers rule - should use {{}}
        const anotherObject = new Object; // Triggers rule
    }}
}}''',
            
            # Extend native rules
            'no-extend-native': '''// This component triggers the no-extend-native rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        Object.prototype.extra = 55; // Extending native Object - triggers rule
        Array.prototype.customMethod = function() {{ return 'custom'; }}; // Triggers rule
    }}
}}''',
            
            # Object calls rules
            'no-obj-calls': '''// This component triggers the no-obj-calls rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const math = Math(); // Calling Math as function - triggers rule
        const json = JSON(); // Calling JSON as function - triggers rule
    }}
}}''',
            
            # Extra bind rules
            'no-extra-bind': '''// This component triggers the no-extra-bind rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const x = function () {{
            return "ESLint";
        }}.bind({{ name: "ESLint" }}); // Unnecessary bind - triggers rule
        
        const y = (() => {{
            return "test";
        }}).bind(this); // Arrow function with bind - triggers rule
    }}
}}''',
            
            # Undefined variables rules
            'no-undef': '''// This component triggers the no-undef rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const a = someUndefinedFunction(); // Undefined function - triggers rule
        undefinedVariable = 10; // Undefined variable - triggers rule
    }}
}}''',
            
            # IIFE wrap rules
            'wrap-iife': '''// This component triggers the wrap-iife rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const x = function () {{ return {{ y: 1 }}; }}(); // Unwrapped IIFE - triggers rule
    }}
}}''',
            
            # Function assign rules
            'no-func-assign': '''// This component triggers the no-func-assign rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        function foo() {{}}
        foo = "bar"; // Reassigning function declaration - triggers rule
    }}
}}''',
            
            # Regex spaces rules
            'no-regex-spaces': '''// This component triggers the no-regex-spaces rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const re = /foo   bar/; // Multiple spaces in regex - triggers rule
        const re2 = new RegExp("foo   bar"); // Multiple spaces - triggers rule
    }}
}}''',
            
            # Secure document rules
            'secure-document': '''// This component triggers the secure-document rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const curScript = document.currentScript; // Unsupported document API - triggers rule
        document.write("content"); // Unsupported document method - triggers rule
    }}
}}''',
            
            # Implied eval rules
            'no-implied-eval': '''// This component triggers the no-implied-eval rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        setTimeout("alert('Hi!');", 100); // String in setTimeout - triggers rule
        setInterval("console.log('test');", 1000); // String in setInterval - triggers rule
    }}
}}''',
            
            # ECMA intrinsics rules
            'ecma-intrinsics': '''// This component triggers the ecma-intrinsics rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        String.customMethod = function() {{}}; // Modifying intrinsic String - triggers rule
        Array.prototype.nonStandard = "test"; // Non-standard extension - triggers rule
    }}
}}''',
            
            # Div regex rules
            'no-div-regex': '''// This component triggers the no-div-regex rule
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        const pattern = /=foo/; // Division-like regex - triggers rule
    }}
}}''',
        }
        
        # Get template based on rule key
        template_key = None
        for key in rule_templates.keys():
            if key in rule_key:
                template_key = key
                break
        
        if template_key:
            template = rule_templates[template_key]
        else:
            # Default template for unknown rules
            template = '''// This component is generated to trigger the rule: {rule_key}
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    // Rule: {rule_name}
    connectedCallback() {{
        // This component triggers: {rule_key}
        console.log('Triggering rule: {rule_key}');
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
        <h2>Rule Trigger: {component_name}</h2>
        <p>This component is designed to trigger specific ESLint rules for testing purposes.</p>
    </div>
</template>'''
    
    def generate_component_meta(self, component_name):
        """Generate the .js-meta.xml file for the component."""
        return f'''<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion>
    <isExposed>false</isExposed>
    <description>Component that triggers ESLint rule violations for testing</description>
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
        
        print(f"\n✅ Successfully generated {total_rules} Lightning Web Components!")
        print(f"📁 Components created in: {self.output_dir}")


def main():
    """Main function to generate JavaScript rule trigger files."""
    generator = JavaScriptRuleTriggerGenerator()
    generator.process_csv_files()


if __name__ == "__main__":
    main() 