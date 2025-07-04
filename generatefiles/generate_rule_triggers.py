#!/usr/bin/env python3
"""
Generate Rule Trigger Files

This script reads CSV files from ./apex-split directory and creates Apex classes
that would trigger each rule violation for code scanning software testing.
"""

import csv
import os
import re
from pathlib import Path


class ApexRuleTriggerGenerator:
    """Generates Apex classes that trigger specific CodeScan rules."""
    
    def __init__(self, csv_dir='apex-split', output_dir='force-app/main/default/classes'):
        self.csv_dir = Path(csv_dir)
        self.output_dir = Path(output_dir)
        self.rule_counter = 1
        
    def create_salesforce_structure(self):
        """Create the proper Salesforce directory structure."""
        directories = [
            'force-app/main/default/classes',
            'force-app/main/default/triggers',
            'force-app/main/default/objects',
        ]
        
        for directory in directories:
            Path(directory).mkdir(parents=True, exist_ok=True)
            
    def sanitize_class_name(self, rule_key, rule_name):
        """Generate a valid Apex class name from rule key and name."""
        # Remove prefixes and special characters
        clean_key = re.sub(r'^(sf:|common-sf:)', '', rule_key)
        clean_key = re.sub(r'[^a-zA-Z0-9]', '', clean_key)
        
        # Ensure it starts with a letter and is a reasonable length
        if not clean_key or not clean_key[0].isalpha():
            clean_key = f"Rule{self.rule_counter:03d}{clean_key}"
            
        # Limit length to 40 characters (Salesforce limit)
        if len(clean_key) > 35:
            clean_key = clean_key[:35]
            
        return f"{clean_key}Trigger"
    
    def generate_apex_code_for_rule(self, rule_key, rule_name, rule_desc, severity):
        """Generate Apex code that would trigger the specific rule."""
        
        rule_templates = {
            # Global modifier rules
            'AvoidGlobalModifier': '''global class {class_name} implements Schedulable {{
    global void execute(SchedulableContext context) {{
        // This global class triggers the AvoidGlobalModifier rule
        System.debug('Global modifier used unnecessarily');
    }}
}}''',
            
            # Hard coded error rules
            'AvoidHardCodedError': '''public class {class_name} {{
    public void triggerHandler() {{
        try {{
            Integer x = 1/0;
        }} catch (Exception e) {{
            throw new AuraHandledException('Hard coded error message'); // Triggers rule
        }}
    }}
}}''',
            
            # SOQL in loops
            'AvoidSoqlInLoops': '''public class {class_name} {{
    public void badMethod() {{
        for (Integer i = 0; i < 10; i++) {{
            List<Account> accounts = [SELECT Id FROM Account LIMIT 1]; // Triggers rule
        }}
    }}
}}''',
            
            # Size of SOQL
            'AvoidSizeOfSoql': '''public class {class_name} {{
    public void badMethod() {{
        Integer count = [SELECT Id FROM Account].size(); // Triggers rule
        System.debug('Count: ' + count);
    }}
}}''',
            
            # Exception class naming
            'ExceptionClassNaming': '''public class {class_name} extends Exception {{
    // This class name doesn't end with 'Exception' properly
    public {class_name}() {{
        super('Custom exception');
    }}
}}''',
            
            # Long class name
            'LongClassName': '''public class {class_name}WithAnExcessivelyLongNameThatExceedsRecommendedLimits {{
    public void someMethod() {{
        System.debug('Long class name triggers rule');
    }}
}}''',
            
            # Long method name
            'LongMethodName': '''public class {class_name} {{
    public void thisIsAnExcessivelyLongMethodNameThatViolatesNamingConventions() {{
        System.debug('Long method name triggers rule');
    }}
}}''',
            
            # Variable declaration hides another
            'VariableDeclarationHidesAnother': '''public class {class_name} {{
    private Integer x = 5;
    
    public void someMethod() {{
        Integer x = 10; // This hides the field x
        System.debug('Hidden variable: ' + x);
    }}
}}''',
            
            # Uncommented empty constructor
            'UncommentedEmptyConstructor': '''public class {class_name} {{
    public {class_name}() {{
        // Empty constructor without meaningful comment
    }}
}}''',
            
            # @AuraEnabled without catch block
            'AuraEnabledWithoutCatchBlock': '''public class {class_name} {{
    @AuraEnabled
    public static String getSomething() {{
        // Missing try-catch block - triggers rule
        return 'Some data';
    }}
}}''',
            
            # Abstract class without methods
            'AbstractClassWithoutAnyMethod': '''public abstract class {class_name} {{
    String field;
    Integer otherField;
    // Abstract class with no methods triggers rule
}}''',
            
            # Abstract class without abstract methods
            'AbstractClassWithoutAbstractMethod': '''public abstract class {class_name} {{
    public void method1() {{
        System.debug('Method 1');
    }}
    
    public void method2() {{
        System.debug('Method 2');
    }}
    // No abstract methods in abstract class
}}''',
            
            # SOQL with negative logic
            'AvoidSoqlWithNegativeLogic': '''public class {class_name} {{
    public void badQuery() {{
        List<Account> accounts = [SELECT Id FROM Account WHERE Name != 'Test']; // Triggers rule
        System.debug('Accounts: ' + accounts.size());
    }}
}}''',
            
            # Methods before initializers
            'AvoidMethodsBeforeInitializers': '''public class {class_name} {{
    private String status;
    
    public {class_name}(String status) {{
        if (getStatus() == 'something') {{ // Method called before initialization
            System.debug('Status check');
        }}
        this.status = status;
    }}
    
    public String getStatus() {{
        return this.status;
    }}
}}''',
            
            # For loop to add elements
            'AvoidForLoopToJustAddElementsToCollection': '''public class {class_name} {{
    public void badCombine() {{
        List<String> listOne = new List<String>{{'one', 'two'}};
        List<String> listTwo = new List<String>{{'A', 'B'}};
        
        for (String item : listOne) {{ // Should use addAll instead
            listTwo.add(item);
        }}
    }}
}}''',
            
            # Outbound email send
            'OutboundEmailSend': '''public class {class_name} {{
    public void sendEmail() {{
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setSubject('Test Email');
        mail.setToAddresses(new String[]{{ 'test@example.com' }});
        mail.setHtmlBody('Test email body');
        Messaging.sendEmail(new Messaging.SingleEmailMessage[]{{ mail }}); // Triggers rule
    }}
}}''',
            
            # Database.AllowsCallouts in Batch
            'AvoidOutboundCallsInBatchApex': '''global class {class_name} implements Database.Batchable<sObject>, Database.AllowsCallouts {{
    global List<sObject> start(Database.BatchableContext bc) {{
        return [SELECT Id FROM Account LIMIT 100];
    }}
    
    global void execute(Database.BatchableContext bc, List<sObject> scope) {{
        // Batch with callouts interface triggers rule
        System.debug('Processing batch');
    }}
    
    global void finish(Database.BatchableContext bc) {{
        System.debug('Batch finished');
    }}
}}''',
            
            # Left braces positioning
            'LeftBracesLinePositions': '''public class {class_name}
{{ // Inconsistent brace positioning
    public void test1()
    {{ // Triggers rule for inconsistent positioning
        System.debug('Test method');
    }}
}}''',
            
            # Class without test class
            'ClassWithoutTestClass': '''public class {class_name} {{
    public void businessLogic() {{
        System.debug('Business logic without corresponding test class');
    }}
}}''',
            
            # Track suppress warnings
            'TrackSuppressWarnings': '''@SuppressWarnings('all')
public class {class_name} {{
    public void someMethod() {{
        System.debug('Suppressed warnings tracked');
    }}
}}''',
            
            # Excessive public count
            'ExcessivePublicCount': '''public class {class_name} {{
    public String field1;
    public String field2;
    public String field3;
    public String field4;
    public String field5;
    
    public void method1() {{ }}
    public void method2() {{ }}
    public void method3() {{ }}
    public void method4() {{ }}
    public void method5() {{ }}
    public void method6() {{ }}
    public void method7() {{ }}
    public void method8() {{ }}
    public void method9() {{ }}
    public void method10() {{ }}
}}''',
            
            # Coupling between objects
            'CouplingBetweenObjects': '''public class {class_name} {{
    private Account var1;
    private Contact var2;
    private Opportunity var3;
    private Lead var4;
    private Case var5;
    
    public Campaign doWork() {{
        User var6;
        Profile var7;
        Organization var8;
        return new Campaign();
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
            template = '''public class {class_name} {{
    // This class is generated to trigger the rule: {rule_key}
    // Rule: {rule_name}
    public void triggerRule() {{
        System.debug('This class triggers: {rule_key}');
    }}
}}'''
        
        return template.format(
            class_name=self.sanitize_class_name(rule_key, rule_name),
            rule_key=rule_key,
            rule_name=rule_name
        )
    
    def generate_meta_xml(self, class_name):
        """Generate the .cls-meta.xml file for the class."""
        return f'''<?xml version="1.0" encoding="UTF-8"?>
<ApexClass xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion>
    <status>Active</status>
</ApexClass>'''
    
    def process_csv_files(self):
        """Process all CSV files and generate trigger classes."""
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
                    # Use utf-8-sig to handle BOM and csv.QUOTE_MINIMAL for better parsing
                    reader = csv.DictReader(file, quoting=csv.QUOTE_MINIMAL)
                    
                    for row_num, row in enumerate(reader, start=2):
                        try:
                            # Debug: print first few characters of each field
                            if row_num <= 3:
                                print(f"  Row {row_num}: {list(row.keys())[:3]}")
                            
                            if not row.get('rules_key') or not row['rules_key'].strip():
                                if row_num <= 5:  # Only show first few debug messages
                                    print(f"  Skipping row {row_num}: empty rules_key")
                                continue
                                
                            rule_key = row['rules_key'].strip()
                            rule_name = row.get('rules_name', '').strip()
                            rule_desc = row.get('rules_mdDesc', '').strip()
                            severity = row.get('rules_severity', '').strip()
                            
                            if not rule_key:
                                continue
                            
                            # Generate class name
                            class_name = self.sanitize_class_name(rule_key, rule_name)
                            
                            # Generate Apex code
                            apex_code = self.generate_apex_code_for_rule(rule_key, rule_name, rule_desc, severity)
                            
                            # Write .cls file
                            cls_file = self.output_dir / f"{class_name}.cls"
                            with open(cls_file, 'w', encoding='utf-8') as f:
                                f.write(apex_code)
                            
                            # Write .cls-meta.xml file
                            meta_file = self.output_dir / f"{class_name}.cls-meta.xml"
                            with open(meta_file, 'w', encoding='utf-8') as f:
                                f.write(self.generate_meta_xml(class_name))
                            
                            total_rules += 1
                            file_rules += 1
                            self.rule_counter += 1
                            
                            print(f"  Created: {class_name}.cls (Rule: {rule_key})")
                            
                        except Exception as e:
                            print(f"  Error processing row {row_num}: {e}")
                            continue
                    
                    print(f"  Processed {file_rules} rules from {csv_file.name}")
                            
            except Exception as e:
                print(f"  Error reading {csv_file.name}: {e}")
                # Try alternative parsing method
                try:
                    with open(csv_file, 'r', encoding='utf-8-sig') as file:
                        reader = csv.DictReader(file)
                        
                        for row_num, row in enumerate(reader, start=2):
                            if not row.get('rules_key') or not row['rules_key'].strip():
                                continue
                                
                            rule_key = row['rules_key'].strip()
                            rule_name = row.get('rules_name', '').strip()
                            rule_desc = row.get('rules_mdDesc', '').strip()
                            severity = row.get('rules_severity', '').strip()
                            
                            # Generate class name
                            class_name = self.sanitize_class_name(rule_key, rule_name)
                            
                            # Generate Apex code
                            apex_code = self.generate_apex_code_for_rule(rule_key, rule_name, rule_desc, severity)
                            
                            # Write .cls file
                            cls_file = self.output_dir / f"{class_name}.cls"
                            with open(cls_file, 'w', encoding='utf-8') as f:
                                f.write(apex_code)
                            
                            # Write .cls-meta.xml file
                            meta_file = self.output_dir / f"{class_name}.cls-meta.xml"
                            with open(meta_file, 'w', encoding='utf-8') as f:
                                f.write(self.generate_meta_xml(class_name))
                            
                            total_rules += 1
                            file_rules += 1
                            self.rule_counter += 1
                            
                            print(f"  Created: {class_name}.cls (Rule: {rule_key})")
                    
                    print(f"  Processed {file_rules} rules from {csv_file.name} (alternative method)")
                except Exception as e2:
                    print(f"  Failed to process {csv_file.name} with both methods: {e2}")
        
        print(f"\n✅ Successfully generated {total_rules} Apex classes!")
        print(f"📁 Files created in: {self.output_dir}")


def main():
    """Main function to generate rule trigger files."""
    generator = ApexRuleTriggerGenerator()
    generator.process_csv_files()


if __name__ == "__main__":
    main() 