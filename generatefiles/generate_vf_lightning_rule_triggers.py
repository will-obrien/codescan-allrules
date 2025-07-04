#!/usr/bin/env python3
"""
Generate Visualforce and Lightning Rule Trigger Files

This script reads CSV files from ./vfandlightning-split directory and creates Visualforce pages
and Lightning components that would trigger each rule violation for code scanning software testing.
"""

import csv
import os
import re
from pathlib import Path


class VFLightningRuleTriggerGenerator:
    """Generates Visualforce and Lightning component files that trigger specific rules."""
    
    def __init__(self, csv_dir='vfandlightning-split', output_dir='force-app/main/default'):
        self.csv_dir = Path(csv_dir)
        self.output_dir = Path(output_dir)
        self.rule_counter = 1
        
    def create_salesforce_structure(self):
        """Create the proper Salesforce directory structure."""
        directories = [
            'force-app/main/default/pages',
            'force-app/main/default/lwc',
            'force-app/main/default/aura',
            'force-app/main/default/components'
        ]
        
        for directory in directories:
            Path(directory).mkdir(parents=True, exist_ok=True)
            
    def sanitize_component_name(self, rule_key, rule_name):
        """Generate a valid component name from rule key and name."""
        # Extract the rule part after the colon
        if ':' in rule_key:
            clean_key = rule_key.split(':')[1]
        else:
            clean_key = rule_key
            
        # Remove special characters and make camelCase
        clean_key = re.sub(r'[^a-zA-Z0-9]', '', clean_key)
        
        # Ensure it starts with a lowercase letter
        if not clean_key or not clean_key[0].isalpha():
            clean_key = f"rule{self.rule_counter:03d}{clean_key}"
            
        # Convert to camelCase and ensure it starts with lowercase
        clean_key = clean_key[0].lower() + clean_key[1:] if clean_key else f"rule{self.rule_counter:03d}"
        
        # Limit length to reasonable size
        if len(clean_key) > 35:
            clean_key = clean_key[:35]
            
        return f"{clean_key}Trigger"
    
    def is_visualforce_rule(self, rule_key):
        """Determine if a rule is specific to Visualforce."""
        # Only rules with vf: prefix are true Visualforce rules
        # cs-vf: prefix rules are JavaScript/ESLint rules for Lightning
        return rule_key.startswith('vf:') or rule_key.startswith('common-vf:')
    
    def is_lightning_rule(self, rule_key):
        """Determine if a rule is specific to Lightning/Aura."""
        lightning_indicators = ['aura-api', 'ecma-intrinsics']
        return any(indicator in rule_key for indicator in lightning_indicators)
        
    def generate_visualforce_code_for_rule(self, rule_key, rule_name, rule_desc, severity):
        """Generate Visualforce page code that would trigger the specific rule."""
        
        component_name = self.sanitize_component_name(rule_key, rule_name)
        
        # Specific templates for known VF rules
        if 'InputImg' in rule_key:
            # Image without alt attribute
            return f'''<apex:page controller="{component_name}Controller">
    <apex:form>
        <h1>VF Rule Trigger: {rule_key}</h1>
        <p>This page triggers the rule: {rule_name}</p>
        
        <!-- Triggers {rule_key} - Image input without alt attribute -->
        <input type="image" src="{{!URLFOR($Resource.SampleImage, 'button.png')}}" />
        
        <apex:inputText value="{{!testValue}}" />
        <apex:commandButton value="Submit" action="{{!save}}" />
    </apex:form>
</apex:page>'''
        
        elif 'XPath' in rule_key:
            # Multiple forms to trigger XPath rule
            return f'''<apex:page controller="{component_name}Controller">
    <h1>VF Rule Trigger: {rule_key}</h1>
    <p>This page triggers the rule: {rule_name}</p>
    
    <!-- Triggers {rule_key} - Multiple forms on a page -->
    <apex:form>
        <apex:inputText value="{{!testValue1}}" />
        <apex:commandButton value="Submit Form 1" action="{{!save}}" />
    </apex:form>
    
    <apex:form>
        <apex:inputText value="{{!testValue2}}" />
        <apex:commandButton value="Submit Form 2" action="{{!save}}" />
    </apex:form>
    
    <apex:form>
        <apex:inputText value="{{!testValue3}}" />
        <apex:commandButton value="Submit Form 3" action="{{!save}}" />
    </apex:form>
</apex:page>'''
        
        elif 'exception' in rule_key.lower():
            # Parser exception trigger
            return f'''<apex:page controller="{component_name}Controller">
    <h1>VF Rule Trigger: {rule_key}</h1>
    <p>This page triggers the rule: {rule_name}</p>
    
    <!-- Triggers {rule_key} - Syntax that might cause parser issues -->
    <apex:form>
        <apex:inputText value="{{!testValue}}" />
        <!-- Intentionally problematic syntax -->
        {{!$Action.Case.New}}
        <apex:commandButton value="Submit" action="{{!save}}" />
    </apex:form>
</apex:page>'''
        
        else:
            # Default VF template
            return f'''<apex:page controller="{component_name}Controller">
    <apex:form>
        <h1>VF Rule Trigger: {rule_key}</h1>
        <p>This page is designed to trigger the rule: {rule_name}</p>
        <p>Rule Description: {rule_key}</p>
        
        <apex:pageBlock title="Test Block">
            <apex:inputText value="{{!testValue}}" label="Test Input"/>
            <apex:commandButton value="Test Action" action="{{!testAction}}"/>
        </apex:pageBlock>
    </apex:form>
</apex:page>'''
    
    def generate_visualforce_meta(self, component_name):
        """Generate the .page-meta.xml file for the Visualforce page."""
        return f'''<?xml version="1.0" encoding="UTF-8"?>
<ApexPage xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion>
    <availableInTouch>true</availableInTouch>
    <confirmationTokenRequired>false</confirmationTokenRequired>
    <label>{component_name}</label>
    <description>Visualforce page that triggers specific rule violations for testing</description>
</ApexPage>'''
    
    def generate_lightning_js_code_for_rule(self, rule_key, rule_name, rule_desc, severity):
        """Generate Lightning Web Component JavaScript code that triggers the specific rule."""
        
        component_name = self.sanitize_component_name(rule_key, rule_name)
        
        # Extract specific rule identifiers
        rule_templates = {
            'no-regex-spaces': '''// This component triggers VF/Lightning rule: no-regex-spaces
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    validateInput() {{
        // Triggers no-regex-spaces - multiple spaces in regex
        var re = /foo   bar/; // Should be /foo {{3}}bar/
        var anotherRe = new RegExp("test   pattern"); // Multiple spaces
        return re.test('foo   bar');
    }}
}}''',
            
            'no-self-compare': '''// This component triggers VF/Lightning rule: no-self-compare
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    checkValues() {{
        var x = 10;
        // Triggers no-self-compare - comparing variable to itself
        if (x === x) {{
            console.log('This is confusing');
        }}
        
        var result = this.someValue === this.someValue; // Another self-compare
        return result;
    }}
}}''',
            
            'no-return-assign': '''// This component triggers VF/Lightning rule: no-return-assign
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    getValue() {{
        var bar = 5;
        // Triggers no-return-assign - assignment in return statement
        return this.foo = bar + 2;
    }}
    
    getAnotherValue() {{
        // Triggers no-return-assign - compound assignment in return
        return this.count += 1;
    }}
}}''',
            
            'no-implied-eval': '''// This component triggers VF/Lightning rule: no-implied-eval
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        // Triggers no-implied-eval - string passed to setTimeout
        setTimeout("alert('Hi!');", 100);
        
        // Triggers no-implied-eval - string passed to setInterval  
        setInterval("console.log('test');", 1000);
        
        // Another violation
        window.setTimeout("this.count = 5", 10);
    }}
}}''',
            
            'wrap-iife': '''// This component triggers VF/Lightning rule: wrap-iife
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        // Triggers wrap-iife - IIFE without proper wrapping
        var x = function () {{ return {{ y: 1 }}; }}(); // Should be wrapped
        
        var result = function() {{
            return 'immediate execution';
        }}(); // Another unwrapped IIFE
    }}
}}''',
            
            'aura-api': '''// This component triggers VF/Lightning rule: aura-api
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        // Triggers aura-api - using deprecated/private Aura API
        try {{
            Aura.notGreat(); // Should use $A instead of Aura
        }} catch(e) {{
            console.log('Aura API error');
        }}
        
        try {{
            $A.util.notUtil(); // $A.util does not contain notUtil
        }} catch(e) {{
            console.log('Invalid $A.util method');
        }}
    }}
}}''',
            
            'ecma-intrinsics': '''// This component triggers VF/Lightning rule: ecma-intrinsics
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        // Triggers ecma-intrinsics - modifying intrinsic types
        String.doSomething = function() {{
            return 'custom method';
        }}; // Violation: modifying intrinsic String type
        
        Array.customMethod = function() {{
            return [];
        }}; // Another intrinsic modification
    }}
}}''',
            
            'no-octal-escape': '''// This component triggers VF/Lightning rule: no-octal-escape
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        // Triggers no-octal-escape - octal escape sequences
        var copyright = "Copyright \\251"; // Should use \\u00A9
        var another = "Some text \\377"; // Another octal escape
        console.log(copyright, another);
    }}
}}''',
            
            'no-sparse-arrays': '''// This component triggers VF/Lightning rule: no-sparse-arrays
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        // Triggers no-sparse-arrays - arrays with holes
        var items = [,,]; // Sparse array with empty slots
        var colors = ["red",, "blue"]; // Another sparse array
        
        console.log('Items length:', items.length);
        console.log('Colors:', colors);
    }}
}}''',
            
            'no-plusplus': '''// This component triggers VF/Lightning rule: no-plusplus
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    increment() {{
        var foo = 0;
        foo++; // Triggers no-plusplus
        
        var bar = 42;
        bar--; // Another plusplus violation
        
        // In a for loop
        for (var i = 0; i < 10; i++) {{ // Triggers no-plusplus
            console.log(i);
        }}
    }}
}}''',
            
            'no-script-url': '''// This component triggers VF/Lightning rule: no-script-url
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    handleClick() {{
        // Triggers no-script-url - javascript: URL
        if (typeof window !== 'undefined') {{
            window.location.href = "javascript:void(0)";
        }}
    }}
}}''',
            
            'eqeqeq': '''// This component triggers VF/Lightning rule: eqeqeq
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    checkEquality() {{
        var x = 42;
        var text = "test";
        
        // Triggers eqeqeq - should use === instead of ==
        if (x == 42) {{
            console.log('Found match');
        }}
        
        if ("" == text) {{ // Another == violation
            console.log('Empty text');
        }}
        
        if (this.someValue != undefined) {{ // Should use !==
            console.log('Has value');
        }}
    }}
}}''',
            
            'no-console': '''// This component triggers VF/Lightning rule: no-console
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        // Triggers no-console - console usage in production code
        console.log("Log a debug level message.");
        console.warn("Log a warn level message.");
        console.error("Log an error level message.");
        console.info("Log an info message.");
    }}
}}''',
            
            'no-floating-decimal': '''// This component triggers VF/Lightning rule: no-floating-decimal
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    calculateValues() {{
        // Triggers no-floating-decimal - floating decimals without leading/trailing digits
        var num1 = .5; // Should be 0.5
        var num2 = 2.; // Should be 2.0
        var num3 = -.7; // Should be -0.7
        
        return num1 + num2 + num3;
    }}
}}''',
            
            'no-div-regex': '''// This component triggers VF/Lightning rule: no-div-regex
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    validatePattern() {{
        // Triggers no-div-regex - division operator at beginning of regex
        function bar() {{ 
            return /=foo/; // Should be /\\=foo/
        }}
        
        return bar();
    }}
}}''',
            
            'no-underscore-dangle': '''// This component triggers VF/Lightning rule: no-underscore-dangle
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    connectedCallback() {{
        // Triggers no-underscore-dangle - dangling underscores
        var foo_ = 'trailing underscore';
        var _bar = 'leading underscore';
        
        this._privateMethod(); // Method with underscore
        this.value_ = 'another trailing underscore';
    }}
    
    _privateMethod() {{
        console.log('Private method with underscore');
    }}
}}''',
            
            'new-parens': '''// This component triggers VF/Lightning rule: new-parens
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    createObjects() {{
        // Triggers new-parens - missing parentheses with new
        var person = new Date; // Should be new Date()
        var arr = new Array; // Should be new Array()
        
        return {{ person, arr }};
    }}
}}''',
        }
        
        # Find matching template
        template = None
        for rule_pattern, rule_template in rule_templates.items():
            if rule_pattern in rule_key:
                template = rule_template
                break
        
        if not template:
            # Default template for unknown rules
            template = '''// This component is generated to trigger the VF/Lightning rule: {rule_key}
import {{ LightningElement }} from 'lwc';

export default class {class_name} extends LightningElement {{
    // Rule: {rule_name}
    connectedCallback() {{
        // This component triggers: {rule_key}
        console.log('Triggering VF/Lightning rule: {rule_key}');
        
        // Example code that might trigger the rule
        var example = "This triggers rule {rule_key}";
        return example;
    }}
}}'''
        
        return template.format(
            class_name=component_name,
            rule_key=rule_key,
            rule_name=rule_name
        )
    
    def generate_lightning_html(self, component_name):
        """Generate the HTML template for the Lightning Web Component."""
        return f'''<template>
    <div class="slds-box slds-theme_default">
        <h2>VF/Lightning Rule Trigger: {component_name}</h2>
        <p>This component is designed to trigger specific VF/Lightning rules for testing purposes.</p>
        <div class="slds-m-top_medium">
            <lightning-button variant="brand" label="Test Rule Trigger" onclick={{handleClick}}></lightning-button>
        </div>
    </div>
</template>'''
    
    def generate_lightning_meta(self, component_name):
        """Generate the .js-meta.xml file for the Lightning component."""
        return f'''<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion>
    <isExposed>false</isExposed>
    <description>Lightning component that triggers VF/Lightning rule violations for testing</description>
</LightningComponentBundle>'''
    
    def process_csv_files(self):
        """Process all CSV files and generate trigger components."""
        if not self.csv_dir.exists():
            print(f"Directory {self.csv_dir} does not exist!")
            return
        
        self.create_salesforce_structure()
        
        csv_files = list(self.csv_dir.glob('*.csv'))
        total_rules = 0
        vf_rules = 0
        lightning_rules = 0
        
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
                            
                            component_name = self.sanitize_component_name(rule_key, rule_name)
                            
                            if self.is_visualforce_rule(rule_key):
                                # Create Visualforce page
                                vf_dir = self.output_dir / 'pages'
                                vf_dir.mkdir(parents=True, exist_ok=True)
                                
                                # Generate Visualforce page code
                                vf_code = self.generate_visualforce_code_for_rule(rule_key, rule_name, rule_desc, severity)
                                
                                # Write .page file
                                page_file = vf_dir / f"{component_name}.page"
                                with open(page_file, 'w', encoding='utf-8') as f:
                                    f.write(vf_code)
                                
                                # Write .page-meta.xml file
                                meta_file = vf_dir / f"{component_name}.page-meta.xml"
                                with open(meta_file, 'w', encoding='utf-8') as f:
                                    f.write(self.generate_visualforce_meta(component_name))
                                
                                vf_rules += 1
                                print(f"  Created VF Page: {component_name} (Rule: {rule_key})")
                            
                            else:
                                # Create Lightning Web Component
                                lwc_dir = self.output_dir / 'lwc' / component_name
                                lwc_dir.mkdir(parents=True, exist_ok=True)
                                
                                # Generate JavaScript code
                                js_code = self.generate_lightning_js_code_for_rule(rule_key, rule_name, rule_desc, severity)
                                
                                # Write .js file
                                js_file = lwc_dir / f"{component_name}.js"
                                with open(js_file, 'w', encoding='utf-8') as f:
                                    f.write(js_code)
                                
                                # Write .html file
                                html_file = lwc_dir / f"{component_name}.html"
                                with open(html_file, 'w', encoding='utf-8') as f:
                                    f.write(self.generate_lightning_html(component_name))
                                
                                # Write .js-meta.xml file
                                meta_file = lwc_dir / f"{component_name}.js-meta.xml"
                                with open(meta_file, 'w', encoding='utf-8') as f:
                                    f.write(self.generate_lightning_meta(component_name))
                                
                                lightning_rules += 1
                                print(f"  Created LWC: {component_name} (Rule: {rule_key})")
                            
                            total_rules += 1
                            file_rules += 1
                            self.rule_counter += 1
                            
                        except Exception as e:
                            print(f"  Error processing row {row_num}: {e}")
                            continue
                    
                    print(f"  Processed {file_rules} rules from {csv_file.name}")
                            
            except Exception as e:
                print(f"  Error reading {csv_file.name}: {e}")
        
        print(f"\n✅ Successfully generated {total_rules} VF/Lightning components!")
        print(f"📄 Visualforce Pages: {vf_rules}")
        print(f"⚡ Lightning Web Components: {lightning_rules}")
        print(f"📁 Files created in: {self.output_dir}")


def main():
    """Main function to generate VF/Lightning rule trigger files."""
    generator = VFLightningRuleTriggerGenerator()
    generator.process_csv_files()


if __name__ == "__main__":
    main() 