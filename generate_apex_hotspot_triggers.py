#!/usr/bin/env python3
"""
Generate Apex Security Hotspot Trigger Files

This script reads the apexhotspots.csv file and creates Apex classes
that would trigger each security hotspot rule violation for code scanning software testing.
"""

import csv
import os
import re
from pathlib import Path


class ApexHotspotTriggerGenerator:
    """Generates Apex classes that trigger specific security hotspot rules."""
    
    def __init__(self, csv_file='apexhotspots.csv', output_dir='force-app/main/default/classes'):
        self.csv_file = Path(csv_file)
        self.output_dir = Path(output_dir)
        self.rule_counter = 1
        
    def create_salesforce_structure(self):
        """Create the proper Salesforce directory structure."""
        self.output_dir.mkdir(parents=True, exist_ok=True)
            
    def sanitize_class_name(self, rule_key, rule_name):
        """Generate a valid Apex class name from rule key and name."""
        # Remove prefixes and special characters
        clean_key = re.sub(r'^(sf:|common-sf:)', '', rule_key)
        clean_key = re.sub(r'[^a-zA-Z0-9]', '', clean_key)
        
        # Ensure it starts with a letter and is a reasonable length
        if not clean_key or not clean_key[0].isalpha():
            clean_key = f"Hotspot{self.rule_counter:03d}{clean_key}"
            
        # Limit length to 40 characters (Salesforce limit)
        if len(clean_key) > 35:
            clean_key = clean_key[:35]
            
        return f"{clean_key}Trigger"
    
    def generate_apex_code_for_hotspot(self, rule_key, rule_name, rule_desc, severity):
        """Generate Apex code that would trigger the specific security hotspot rule."""
        
        hotspot_templates = {
            # Type Reflection hotspot
            'HotspotTypeReflection': '''public class {class_name} {{
    // This class triggers the HotspotTypeReflection security hotspot
    
    private interface Implementation {{
        void run();
    }}
    
    private class AdminImplementation implements Implementation {{
        public void run() {{
            System.debug('Admin privileged operation');
        }}
    }}
    
    private class StandardImplementation implements Implementation {{
        public void run() {{
            System.debug('Standard operation');
        }}
    }}
    
    public void init(String implementationName) {{
        // Security hotspot: Dynamic type reflection with untrusted input
        Type implementationType = Type.forName(implementationName); // Triggers hotspot
        Implementation i = (Implementation) implementationType.newInstance();
        i.run(); // Potentially dangerous dynamic execution
    }}
    
    public void dynamicTypeUsage() {{
        String className = 'MyDynamicClass';
        Type dynamicType = Type.forName(className); // Security hotspot
        Object instance = dynamicType.newInstance(); // Unsafe reflection
    }}
}}''',
            
            # Encrypt hotspot
            'HotspotEncrypt': '''public class {class_name} {{
    // This class triggers the HotspotEncrypt security hotspot
    
    public void encryptSensitiveData() {{
        String sensitiveData = 'confidential information';
        String key = 'hardcoded-key-123'; // Security hotspot: hardcoded key
        
        // Security hotspot: Using encryption with potentially unsafe practices
        Blob encryptedData = Crypto.encrypt('AES128', Blob.valueOf(key), Blob.valueOf(sensitiveData)); // Triggers hotspot
        
        System.debug('Encrypted data: ' + EncodingUtil.base64Encode(encryptedData));
    }}
    
    public void generateEncryptionKey() {{
        // Security hotspot: Key generation and storage
        Blob cryptoKey = Crypto.generateAesKey(128); // Triggers hotspot
        String keyString = EncodingUtil.base64Encode(cryptoKey);
        
        // Potentially unsafe key storage
        System.debug('Generated key: ' + keyString); // Should use secure storage
    }}
    
    public void encryptWithUserInput(String userKey) {{
        String data = 'sensitive data';
        // Security hotspot: Using user-provided encryption key
        Blob encrypted = Crypto.encrypt('AES256', Blob.valueOf(userKey), Blob.valueOf(data)); // Triggers hotspot
    }}
}}''',
            
            # Cookies hotspot
            'HotspotCookies': '''public class {class_name} {{
    // This class triggers the HotspotCookies security hotspot
    
    public PageReference setCookieWithSensitiveData() {{
        String userId = UserInfo.getUserId();
        String sessionInfo = 'sensitive-session-data';
        
        // Security hotspot: Storing sensitive information in cookies
        Cookie userCookie = new Cookie('UserData', userId + '|' + sessionInfo, null, 315569260, false); // Triggers hotspot
        ApexPages.currentPage().setCookies(new Cookie[] {{ userCookie }});
        
        return null;
    }}
    
    public void createUnsecureCookie() {{
        String sensitiveValue = 'credit-card-1234';
        
        // Security hotspot: Cookie with sensitive data and no security flags
        Cookie sensitiveCookie = new Cookie('PaymentInfo', sensitiveValue, null, -1, false); // Triggers hotspot
        Cookie[] cookies = new Cookie[] {{ sensitiveCookie }};
        ApexPages.currentPage().setCookies(cookies);
    }}
    
    public void storeUserCredentials(String username, String password) {{
        // Security hotspot: Storing credentials in cookies
        Cookie credentialCookie = new Cookie('Credentials', username + ':' + password, null, 86400, false); // Triggers hotspot
        ApexPages.currentPage().setCookies(new Cookie[] {{ credentialCookie }});
    }}
}}''',
            
            # UserInfo.getSessionId hotspot
            'HotspotUserInfoGetSessionIdUsage': '''public class {class_name} {{
    // This class triggers the HotspotUserInfoGetSessionIdUsage security hotspot
    
    public void makeHttpCalloutWithSessionId() {{
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-api.example.com/data');
        req.setMethod('GET');
        
        // Security hotspot: Using session ID in HTTP header
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId()); // Triggers hotspot
        req.setHeader('X-Session-Token', UserInfo.getSessionId()); // Triggers hotspot
        
        Http http = new Http();
        try {{
            HttpResponse res = http.send(req);
            System.debug('Response: ' + res.getBody());
        }} catch (Exception e) {{
            System.debug('Error: ' + e.getMessage());
        }}
    }}
    
    public String exposeSessionId() {{
        // Security hotspot: Returning session ID
        return UserInfo.getSessionId(); // Triggers hotspot
    }}
    
    public void logSessionId() {{
        String sessionId = UserInfo.getSessionId(); // Triggers hotspot
        System.debug('Current session: ' + sessionId); // Potentially logging sensitive data
    }}
    
    public void storeSessionId() {{
        // Security hotspot: Storing session ID in variable
        String currentSession = UserInfo.getSessionId(); // Triggers hotspot
        // Potentially storing in database or other persistent storage
    }}
}}''',
            
            # JSON Deserialization hotspot
            'HotspotDeserializeJson': '''public class {class_name} {{
    // This class triggers the HotspotDeserializeJson security hotspot
    
    public class Car {{
        public String make;
        public String year;
        public String model;
    }}
    
    public Car createCarFromUserInput(String userMake, String userYear) {{
        // Security hotspot: Deserializing JSON with untrusted input
        String jsonString = '{{' + '"make":"' + userMake + '","year":"' + userYear + '"' + '}}';
        Car c = (Car) JSON.deserializeStrict(jsonString, Car.class); // Triggers hotspot
        return c;
    }}
    
    public Object deserializeUnknownJson(String jsonData) {{
        // Security hotspot: Deserializing arbitrary JSON
        Object result = JSON.deserializeUntyped(jsonData); // Triggers hotspot
        return result;
    }}
    
    public void processExternalJsonData(String externalJson) {{
        try {{
            // Security hotspot: Deserializing external JSON data
            Map<String, Object> data = (Map<String, Object>) JSON.deserializeUntyped(externalJson); // Triggers hotspot
            System.debug('Processed data: ' + data);
        }} catch (Exception e) {{
            System.debug('JSON parsing error: ' + e.getMessage());
        }}
    }}
    
    public Car deserializeCarWithValidation(String jsonInput) {{
        // Security hotspot: Even with validation, deserialization is flagged
        if (String.isNotBlank(jsonInput)) {{
            Car deserializedCar = (Car) JSON.deserialize(jsonInput, Car.class); // Triggers hotspot
            return deserializedCar;
        }}
        return null;
    }}
}}''',
        }
        
        # Get template based on rule key
        template_key = None
        for key in hotspot_templates.keys():
            if key in rule_key:
                template_key = key
                break
        
        if template_key:
            template = hotspot_templates[template_key]
        else:
            # Default template for unknown hotspot rules
            template = '''public class {class_name} {{
    // This class is generated to trigger the security hotspot: {rule_key}
    // Rule: {rule_name}
    
    public void triggerSecurityHotspot() {{
        // This method triggers: {rule_key}
        System.debug('Security hotspot trigger: {rule_key}');
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
    
    def process_csv_file(self):
        """Process the CSV file and generate trigger classes."""
        if not self.csv_file.exists():
            print(f"File {self.csv_file} does not exist!")
            return
        
        self.create_salesforce_structure()
        
        total_rules = 0
        
        print(f"Processing {self.csv_file.name}...")
        
        try:
            with open(self.csv_file, 'r', encoding='utf-8-sig') as file:
                reader = csv.DictReader(file)
                
                for row_num, row in enumerate(reader, start=2):
                    try:
                        # Handle different possible column names
                        rule_key = row.get('key', row.get('rules_key', '')).strip()
                        rule_name = row.get('name', row.get('rules_name', '')).strip()
                        rule_desc = row.get('mdDesc', row.get('rules_mdDesc', '')).strip()
                        severity = row.get('severity', row.get('rules_severity', '')).strip()
                        
                        if not rule_key:
                            continue
                        
                        # Generate class name
                        class_name = self.sanitize_class_name(rule_key, rule_name)
                        
                        # Generate Apex code
                        apex_code = self.generate_apex_code_for_hotspot(rule_key, rule_name, rule_desc, severity)
                        
                        # Write .cls file
                        cls_file = self.output_dir / f"{class_name}.cls"
                        with open(cls_file, 'w', encoding='utf-8') as f:
                            f.write(apex_code)
                        
                        # Write .cls-meta.xml file
                        meta_file = self.output_dir / f"{class_name}.cls-meta.xml"
                        with open(meta_file, 'w', encoding='utf-8') as f:
                            f.write(self.generate_meta_xml(class_name))
                        
                        total_rules += 1
                        self.rule_counter += 1
                        
                        print(f"  Created: {class_name}.cls (Rule: {rule_key})")
                        
                    except Exception as e:
                        print(f"  Error processing row {row_num}: {e}")
                        continue
                        
        except Exception as e:
            print(f"  Error reading {self.csv_file.name}: {e}")
        
        print(f"\n✅ Successfully generated {total_rules} Apex security hotspot classes!")
        print(f"📁 Files created in: {self.output_dir}")


def main():
    """Main function to generate security hotspot trigger files."""
    generator = ApexHotspotTriggerGenerator()
    generator.process_csv_file()


if __name__ == "__main__":
    main() 