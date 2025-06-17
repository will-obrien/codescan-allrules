#!/usr/bin/env python3
"""
Generate Salesforce Metadata Rule Trigger Files

This script reads CSV files from ./sfmeta-split directory and creates Salesforce metadata files
that would trigger each metadata rule violation for code scanning software testing.
"""

import csv
import os
import re
from pathlib import Path


class SalesforceMetadataRuleTriggerGenerator:
    """Generates Salesforce metadata files that trigger specific metadata rules."""
    
    def __init__(self, csv_dir='sfmeta-split', output_dir='force-app/main/default'):
        self.csv_dir = Path(csv_dir)
        self.output_dir = Path(output_dir)
        self.rule_counter = 1
        
    def create_salesforce_structure(self):
        """Create the proper Salesforce metadata directory structure."""
        directories = [
            'force-app/main/default/profiles',
            'force-app/main/default/permissionsets',
            'force-app/main/default/workflows',
            'force-app/main/default/flows',
            'force-app/main/default/sharingRules',
            'force-app/main/default/layouts',
            'force-app/main/default/objects',
            'force-app/main/default/settings',
        ]
        
        for directory in directories:
            Path(directory).mkdir(parents=True, exist_ok=True)
            
    def sanitize_file_name(self, rule_key, rule_name):
        """Generate a valid file name from rule key and name."""
        # Remove prefixes and special characters
        clean_key = re.sub(r'^(sfmeta:|common-sfmeta:|codescan-policy:)', '', rule_key)
        clean_key = re.sub(r'[^a-zA-Z0-9]', '', clean_key)
        
        # Ensure it starts with a letter and is a reasonable length
        if not clean_key or not clean_key[0].isalpha():
            clean_key = f"MetaRule{self.rule_counter:03d}{clean_key}"
            
        # Limit length to reasonable size
        if len(clean_key) > 35:
            clean_key = clean_key[:35]
            
        return f"{clean_key}Trigger"
    
    def generate_metadata_for_rule(self, rule_key, rule_name, rule_desc, severity):
        """Generate appropriate metadata file content that would trigger the specific rule."""
        
        metadata_templates = {
            # Profile rules
            'ProfileDataAdminPolicy': {
                'type': 'profile',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageDataCategories</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ViewAllData</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageDataIntegrations</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ModifyAllData</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ViewEncryptedData</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>WeeklyDataExport</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>EditReadOnlyFields</name>
    </userPermissions>
</Profile>'''
            },
            
            'ProfilePlatformAdminPolicy': {
                'type': 'profile',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageUsers</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageRoles</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>AssignPermissionSets</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ResetPasswords</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageInternalUsers</name>
    </userPermissions>
</Profile>'''
            },
            
            'ProfileSessionPolicy': {
                'type': 'profile',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <sessionTimeout>TwentyFourHours</sessionTimeout>
    <sessionSecurityPolicy>
        <sessionTimeout>TwentyFourHours</sessionTimeout>
    </sessionSecurityPolicy>
</Profile>'''
            },
            
            'ProfileUserMgmtPolicy': {
                'type': 'profile',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageUsers</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageRoles</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>AssignPermissionSets</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ResetPasswords</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageInternalUsers</name>
    </userPermissions>
</Profile>'''
            },
            
            'ProfileSecuritySettingsPolicy': {
                'type': 'profile',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageCertificates</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageIpAddresses</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageEncryptionKeys</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ViewThreatDetectionEvents</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageSecurityCenter</name>
    </userPermissions>
</Profile>'''
            },
            
            # Permission Set rules
            'PermissionSetDeveloperPolicy': {
                'type': 'permissionset',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <label>{file_name}</label>
    <userPermissions>
        <enabled>true</enabled>
        <name>AuthorApex</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ImportCustomObjects</name>
    </userPermissions>
</PermissionSet>'''
            },
            
            'PermissionSetApiAdminPolicy': {
                'type': 'permissionset',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <label>{file_name}</label>
    <userPermissions>
        <enabled>true</enabled>
        <name>ModifyMetadata</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>BulkApiHardDelete</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ApiEnabled</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ApexRestServices</name>
    </userPermissions>
</PermissionSet>'''
            },
            
            'PermissionSetPackagesAdminPolicy': {
                'type': 'permissionset',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <label>{file_name}</label>
    <userPermissions>
        <enabled>true</enabled>
        <name>CreateSecondGenPackages</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>DeleteSecondGenPackages</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManagePackageLicenses</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>DownloadAppexchangePackages</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>CreateAppexchangePackages</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>UploadAppexchangePackages</name>
    </userPermissions>
</PermissionSet>'''
            },
            
            'PermissionSetFilesAndContentPolicy': {
                'type': 'permissionset',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <label>{file_name}</label>
    <userPermissions>
        <enabled>true</enabled>
        <name>FilesConnectCloud</name>
    </userPermissions>
</PermissionSet>'''
            },
            
            # Custom Profiles with excessive permissions
            'CustomProfilesPermission': {
                'type': 'profile',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <custom>true</custom>
    <userPermissions>
        <enabled>true</enabled>
        <name>ModifyAllData</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ViewAllData</name>
    </userPermissions>
</Profile>'''
            },
            
            # Object permissions
            'AvoidAllRecordPermissions': {
                'type': 'profile',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <objectPermissions>
        <allowCreate>true</allowCreate>
        <allowDelete>true</allowDelete>
        <allowEdit>true</allowEdit>
        <allowRead>true</allowRead>
        <modifyAllRecords>true</modifyAllRecords>
        <object>Account</object>
        <viewAllRecords>true</viewAllRecords>
    </objectPermissions>
</Profile>'''
            },
            
            # Workflow rules
            'WorkflowWithoutProduct': {
                'type': 'workflow',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>Account</fullName>
    <rules>
        <fullName>{file_name}</fullName>
        <active>true</active>
        <criteriaItems>
            <field>Account.Name</field>
            <operation>notEqual</operation>
            <value></value>
        </criteriaItems>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
        <workflowTimeTriggers>
            <actions>
                <name>EmailAction</name>
                <type>Alert</type>
            </actions>
            <timeLength>1</timeLength>
            <workflowTimeTriggerUnit>Hours</workflowTimeTriggerUnit>
        </workflowTimeTriggers>
    </rules>
</Workflow>'''
            },
            
            # Process Builder rules  
            'ProcessBuilderWithoutProduct': {
                'type': 'flow',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<Flow xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{file_name}</fullName>
    <processType>Workflow</processType>
    <start>
        <object>Account</object>
        <recordTriggerType>CreateAndUpdate</recordTriggerType>
        <triggerType>RecordAfterSave</triggerType>
    </start>
    <status>Active</status>
</Flow>'''
            },
            
            # Page Layout rules
            'ExcessivePageLayout': {
                'type': 'layout',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<Layout xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>Account-{file_name}</fullName>
    <layoutSections>
        <customLabel>true</customLabel>
        <detailHeading>true</detailHeading>
        <editHeading>true</editHeading>
        <label>Information</label>
        <layoutColumns>
            <layoutItems>
                <field>Name</field>
            </layoutItems>
        </layoutColumns>
    </layoutSections>
</Layout>'''
            },
            
            # Sharing Rules
            'SharingRecordTypeId': {
                'type': 'sharingRules',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<SharingRules xmlns="http://soap.sforce.com/2006/04/metadata">
    <sharingCriteriaRules>
        <fullName>{file_name}</fullName>
        <accessLevel>Read</accessLevel>
        <booleanFilter>1</booleanFilter>
        <criteriaItems>
            <field>Name</field>
            <operation>contains</operation>
            <value>Test</value>
        </criteriaItems>
        <sharedTo>
            <roleAndSubordinates>VP</roleAndSubordinates>
        </sharedTo>
    </sharingCriteriaRules>
</SharingRules>'''
            },
            
            # Organization settings
            'OrganizationPasswordPolicy': {
                'type': 'settings',
                'content': '''<?xml version="1.0" encoding="UTF-8"?>
<SecuritySettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <passwordPolicies>
        <complexity>NoRestriction</complexity>
        <expiration>NinetyDays</expiration>
        <historyRestriction>3</historyRestriction>
        <lockoutInterval>FifteenMinutes</lockoutInterval>
        <maxLoginAttempts>TenAttempts</maxLoginAttempts>
        <minimumPasswordLength>8</minimumPasswordLength>
        <minimumPasswordLifetime>false</minimumPasswordLifetime>
        <obscureSecretAnswer>false</obscureSecretAnswer>
        <questionRestriction>DoesNotContainPassword</questionRestriction>
    </passwordPolicies>
</SecuritySettings>'''
            },
        }
        
        # Get template based on rule key
        template_key = None
        for key in metadata_templates.keys():
            if key in rule_key:
                template_key = key
                break
        
        if template_key:
            template_info = metadata_templates[template_key]
            content = template_info['content']
            file_type = template_info['type']
        else:
            # Default template for unknown metadata rules
            content = '''<?xml version="1.0" encoding="UTF-8"?>
<!-- This metadata file is generated to trigger the rule: {rule_key} -->
<!-- Rule: {rule_name} -->
<!-- This file triggers: {rule_key} -->'''
            file_type = 'object'
        
        return content, file_type
    
    def get_file_extension(self, file_type):
        """Get appropriate file extension for metadata type."""
        extensions = {
            'profile': '.profile-meta.xml',
            'permissionset': '.permissionset-meta.xml',
            'workflow': '.workflow-meta.xml',
            'flow': '.flow-meta.xml',
            'layout': '.layout-meta.xml',
            'sharingRules': '.sharingRules-meta.xml',
            'settings': '.settings-meta.xml',
            'object': '.object-meta.xml'
        }
        return extensions.get(file_type, '.xml')
    
    def get_output_directory(self, file_type):
        """Get appropriate output directory for metadata type."""
        directories = {
            'profile': 'profiles',
            'permissionset': 'permissionsets', 
            'workflow': 'workflows',
            'flow': 'flows',
            'layout': 'layouts',
            'sharingRules': 'sharingRules',
            'settings': 'settings',
            'object': 'objects'
        }
        return self.output_dir / directories.get(file_type, 'objects')
    
    def process_csv_files(self):
        """Process all CSV files and generate trigger metadata files."""
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
                            
                            # Generate file name
                            file_name = self.sanitize_file_name(rule_key, rule_name)
                            
                            # Generate metadata content
                            metadata_content, file_type = self.generate_metadata_for_rule(rule_key, rule_name, rule_desc, severity)
                            
                            # Format content with file name
                            formatted_content = metadata_content.format(
                                file_name=file_name,
                                rule_key=rule_key,
                                rule_name=rule_name
                            )
                            
                            # Get output directory and file extension
                            output_dir = self.get_output_directory(file_type)
                            file_extension = self.get_file_extension(file_type)
                            
                            # Special handling for certain file types
                            if file_type == 'sharingRules':
                                metadata_file = output_dir / f"Account{file_extension}"
                            elif file_type == 'workflow':
                                metadata_file = output_dir / f"Account{file_extension}"
                            else:
                                metadata_file = output_dir / f"{file_name}{file_extension}"
                            
                            # Write metadata file
                            with open(metadata_file, 'w', encoding='utf-8') as f:
                                f.write(formatted_content)
                            
                            total_rules += 1
                            file_rules += 1
                            self.rule_counter += 1
                            
                            print(f"  Created: {metadata_file.name} (Rule: {rule_key})")
                            
                        except Exception as e:
                            print(f"  Error processing row {row_num}: {e}")
                            continue
                    
                    print(f"  Processed {file_rules} rules from {csv_file.name}")
                            
            except Exception as e:
                print(f"  Error reading {csv_file.name}: {e}")
        
        print(f"\n✅ Successfully generated {total_rules} Salesforce metadata files!")
        print(f"📁 Files created in: {self.output_dir}")


def main():
    """Main function to generate Salesforce metadata rule trigger files."""
    generator = SalesforceMetadataRuleTriggerGenerator()
    generator.process_csv_files()


if __name__ == "__main__":
    main() 