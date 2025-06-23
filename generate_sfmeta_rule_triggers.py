#!/usr/bin/env python3
"""
Script to generate Salesforce metadata files that trigger rules from CSV files.
This script processes all CSV files in the sfmeta-split directory and creates
appropriate Salesforce metadata files to trigger the rules.
"""

import os
import csv
import json
from pathlib import Path

def read_csv_files(directory):
    """Read all CSV files in the specified directory."""
    rules = []
    csv_files = sorted([f for f in os.listdir(directory) if f.endswith('.csv')])
    
    for csv_file in csv_files:
        file_path = os.path.join(directory, csv_file)
        try:
            with open(file_path, 'r', encoding='utf-8-sig') as f:
                reader = csv.DictReader(f)
                for row in reader:
                    if row.get('rules_key'):  # Skip empty rows
                        rules.append(row)
        except Exception as e:
            print(f"Error reading {csv_file}: {e}")
    
    return rules

def create_directory_structure():
    """Create the Salesforce metadata directory structure."""
    directories = [
        'force-app/main/default/profiles',
        'force-app/main/default/permissionsets',
        'force-app/main/default/objects',
        'force-app/main/default/flows',
        'force-app/main/default/workflows',
        'force-app/main/default/settings',
        'force-app/main/default/validationRules',
        'force-app/main/default/layouts',
        'force-app/main/default/customMetadata'
    ]
    
    for directory in directories:
        os.makedirs(directory, exist_ok=True)

def generate_profile_trigger(rule_key, rule_name):
    """Generate a profile with problematic permissions."""
    profile_name = f"{rule_key.replace(':', '_').replace('-', '_')}_Profile"
    
    # Create profile XML with various problematic permissions
    profile_xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<Profile xmlns="http://soap.sforce.com/2006/04/metadata">
    <custom>true</custom>
    <description>Profile created to trigger rule: {rule_name}</description>
    <userLicense>Salesforce</userLicense>
    
    <!-- Problematic permissions that trigger security rules -->
    <userPermissions>
        <enabled>true</enabled>
        <name>ModifyAllData</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ViewAllData</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageUsers</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>EditReadOnlyFields</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>WeeklyDataExport</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ViewEncryptedData</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageDataIntegrations</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageDataCategories</name>
    </userPermissions>
    
    <!-- Object permissions with problematic settings -->
    <objectPermissions>
        <allowCreate>true</allowCreate>
        <allowDelete>true</allowDelete>
        <allowEdit>true</allowEdit>
        <allowRead>true</allowRead>
        <modifyAllRecords>true</modifyAllRecords>
        <object>Account</object>
        <viewAllRecords>true</viewAllRecords>
    </objectPermissions>
    <objectPermissions>
        <allowCreate>true</allowCreate>
        <allowDelete>true</allowDelete>
        <allowEdit>true</allowEdit>
        <allowRead>true</allowRead>
        <modifyAllRecords>true</modifyAllRecords>
        <object>Contact</object>
        <viewAllRecords>true</viewAllRecords>
    </objectPermissions>
    
    <!-- Field permissions -->
    <fieldPermissions>
        <editable>true</editable>
        <field>Account.Name</field>
        <readable>true</readable>
    </fieldPermissions>
    
    <!-- Password policies that might trigger security rules -->
    <passwordPolicies>
        <complexity>NoRestriction</complexity>
        <expiration>Never</expiration>
        <historyRestriction>NoRestriction</historyRestriction>
        <lockoutInterval>FifteenMinutes</lockoutInterval>
        <maxLoginAttempts>3</maxLoginAttempts>
        <minimumPasswordLength>5</minimumPasswordLength>
        <minimumPasswordLifetime>false</minimumPasswordLifetime>
        <obscureSecretAnswer>false</obscureSecretAnswer>
        <passwordAssistanceMessage>Contact your administrator</passwordAssistanceMessage>
        <passwordAssistanceURL></passwordAssistanceURL>
        <questionRestriction>DoesNotContainPassword</questionRestriction>
    </passwordPolicies>
    
    <!-- Session settings -->
    <sessionSettings>
        <externalCommunityUserIdentityVerif>false</externalCommunityUserIdentityVerif>
        <forceRelogin>false</forceRelogin>
        <requiredSessionLevel>LOW</requiredSessionLevel>
        <sessionPersistence>true</sessionPersistence>
        <sessionTimeout>TwoHours</sessionTimeout>
        <sessionTimeoutWarning>true</sessionTimeoutWarning>
    </sessionSettings>
</Profile>'''

    return profile_name, profile_xml

def generate_permission_set_trigger(rule_key, rule_name):
    """Generate a permission set with problematic permissions."""
    pset_name = f"{rule_key.replace(':', '_').replace('-', '_')}_PermSet"
    
    pset_xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<PermissionSet xmlns="http://soap.sforce.com/2006/04/metadata">
    <description>Permission Set created to trigger rule: {rule_name}</description>
    <label>{pset_name}</label>
    
    <!-- Problematic permissions that trigger security rules -->
    <userPermissions>
        <enabled>true</enabled>
        <name>AuthorApex</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ImportCustomObjects</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ModifyAllData</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ViewAllData</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManagePackageLicenses</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>InstallPackaging</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>PublishPackaging</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageContentTypes</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ManageContentProperties</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>ApiEnabled</name>
    </userPermissions>
    <userPermissions>
        <enabled>true</enabled>
        <name>RunReports</name>
    </userPermissions>
    
    <!-- Object permissions -->
    <objectPermissions>
        <allowCreate>true</allowCreate>
        <allowDelete>true</allowDelete>
        <allowEdit>true</allowEdit>
        <allowRead>true</allowRead>
        <modifyAllRecords>true</modifyAllRecords>
        <object>Account</object>
        <viewAllRecords>true</viewAllRecords>
    </objectPermissions>
</PermissionSet>'''

    return pset_name, pset_xml

def generate_custom_object_trigger(rule_key, rule_name):
    """Generate a custom object without proper descriptions."""
    obj_name = f"{rule_key.replace(':', '_').replace('-', '_')}_Object__c"
    
    obj_xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<CustomObject xmlns="http://soap.sforce.com/2006/04/metadata">
    <actionOverrides>
        <actionName>Accept</actionName>
        <type>Default</type>
    </actionOverrides>
    <allowInChatterGroups>false</allowInChatterGroups>
    <compactLayoutAssignment>SYSTEM</compactLayoutAssignment>
    <deploymentStatus>Deployed</deploymentStatus>
    <enableActivities>false</enableActivities>
    <enableBulkApi>true</enableBulkApi>
    <enableFeeds>false</enableFeeds>
    <enableHistory>false</enableHistory>
    <enableReports>false</enableReports>
    <enableSearch>true</enableSearch>
    <enableSharing>true</enableSharing>
    <enableStreamingApi>true</enableStreamingApi>
    <label>{obj_name.replace('_', ' ')}</label>
    <nameField>
        <label>Name</label>
        <type>Text</type>
    </nameField>
    <pluralLabel>{obj_name.replace('_', ' ')}s</pluralLabel>
    <searchLayouts/>
    <sharingModel>ReadWrite</sharingModel>
    <visibility>Public</visibility>
    
    <!-- Field without description to trigger rule -->
    <fields>
        <fullName>Price__c</fullName>
        <externalId>false</externalId>
        <label>Price</label>
        <precision>18</precision>
        <required>false</required>
        <scale>2</scale>
        <trackTrending>false</trackTrending>
        <type>Currency</type>
    </fields>
    
    <!-- Another field without description -->
    <fields>
        <fullName>Status__c</fullName>
        <externalId>false</externalId>
        <label>Status</label>
        <required>false</required>
        <trackTrending>false</trackTrending>
        <type>Text</type>
        <length>255</length>
    </fields>
</CustomObject>'''

    return obj_name, obj_xml

def generate_flow_trigger(rule_key, rule_name):
    """Generate a flow with problematic patterns."""
    flow_name = f"{rule_key.replace(':', '_').replace('-', '_')}_Flow"
    
    flow_xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<Flow xmlns="http://soap.sforce.com/2006/04/metadata">
    <apiVersion>58.0</apiVersion>
    <description>Flow created to trigger rule: {rule_name}</description>
    <label>{flow_name}</label>
    <processMetadataValues>
        <name>BuilderType</name>
        <value>
            <stringValue>LightningFlowBuilder</stringValue>
        </value>
    </processMetadataValues>
    <processType>Flow</processType>
    <status>Active</status>
    
    <!-- Hard-coded values that trigger rules -->
    <assignments>
        <name>HardCodedAssignment</name>
        <label>Hard Coded Assignment</label>
        <locationX>176</locationX>
        <locationY>134</locationY>
        <assignmentItems>
            <assignToReference>accountName</assignToReference>
            <operator>Assign</operator>
            <value>
                <stringValue>ACME Corp</stringValue>
            </value>
        </assignmentItems>
    </assignments>
    
    <!-- Nested loops that trigger rules -->
    <loops>
        <name>OuterLoop</name>
        <label>Outer Loop</label>
        <locationX>176</locationX>
        <locationY>278</locationY>
        <collectionReference>accountList</collectionReference>
        <iterationOrder>Asc</iterationOrder>
        <nextValueConnector>
            <targetReference>InnerLoop</targetReference>
        </nextValueConnector>
    </loops>
    
    <loops>
        <name>InnerLoop</name>
        <label>Inner Loop</label>
        <locationX>440</locationX>
        <locationY>278</locationY>
        <collectionReference>contactList</collectionReference>
        <iterationOrder>Asc</iterationOrder>
        <nextValueConnector>
            <targetReference>DMLInLoop</targetReference>
        </nextValueConnector>
    </loops>
    
    <!-- DML in loop that triggers rules -->
    <recordUpdates>
        <name>DMLInLoop</name>
        <label>DML In Loop</label>
        <locationX>704</locationX>
        <locationY>278</locationY>
        <inputAssignments>
            <field>Name</field>
            <value>
                <stringValue>Updated Name</stringValue>
            </value>
        </inputAssignments>
        <inputReference>InnerLoop</inputReference>
        <object>Account</object>
    </recordUpdates>
    
    <!-- Many nodes to trigger large flow rule -->
    <decisions>
        <name>Decision1</name>
        <label>Decision 1</label>
        <locationX>176</locationX>
        <locationY>422</locationY>
        <defaultConnectorLabel>Default</defaultConnectorLabel>
        <rules>
            <name>Rule1</name>
            <conditionLogic>and</conditionLogic>
            <conditions>
                <leftValueReference>accountName</leftValueReference>
                <operator>EqualTo</operator>
                <rightValue>
                    <stringValue>Test</stringValue>
                </rightValue>
            </conditions>
            <label>Rule 1</label>
        </rules>
    </decisions>
    
    <!-- Variables -->
    <variables>
        <name>accountName</name>
        <dataType>String</dataType>
        <isCollection>false</isCollection>
        <isInput>false</isInput>
        <isOutput>false</isOutput>
    </variables>
    
    <variables>
        <name>accountList</name>
        <dataType>SObject</dataType>
        <isCollection>true</isCollection>
        <isInput>false</isInput>
        <isOutput>false</isOutput>
        <objectType>Account</objectType>
    </variables>
    
    <variables>
        <name>contactList</name>
        <dataType>SObject</dataType>
        <isCollection>true</isCollection>
        <isInput>false</isInput>
        <isOutput>false</isOutput>
        <objectType>Contact</objectType>
    </variables>
    
    <start>
        <locationX>50</locationX>
        <locationY>0</locationY>
        <connector>
            <targetReference>HardCodedAssignment</targetReference>
        </connector>
    </start>
</Flow>'''

    return flow_name, flow_xml

def generate_workflow_trigger(rule_key, rule_name):
    """Generate a workflow without proper product reference."""
    workflow_name = f"{rule_key.replace(':', '_').replace('-', '_')}_Workflow"
    
    workflow_xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <rules>
        <fullName>{workflow_name}_Rule</fullName>
        <active>true</active>
        <description>Workflow rule created to trigger rule: {rule_name}</description>
        <formula>TRUE</formula>
        <triggerType>onCreateOrTriggeringUpdate</triggerType>
        <workflowTimeTriggers>
            <offsetFromField>Account.CreatedDate</offsetFromField>
            <timeLength>1</timeLength>
            <workflowTimeTriggerUnit>Hours</workflowTimeTriggerUnit>
            <actions>
                <name>UpdateAccountName</name>
                <type>FieldUpdate</type>
            </actions>
        </workflowTimeTriggers>
    </rules>
    
    <!-- Field update without system bypass logic -->
    <fieldUpdates>
        <fullName>UpdateAccountName</fullName>
        <description>Update account name without system bypass logic</description>
        <field>Name</field>
        <formula>Name + " - Updated"</formula>
        <name>Update Account Name</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Formula</operation>
        <protected>false</protected>
    </fieldUpdates>
</Workflow>'''

    return workflow_name, workflow_xml

def generate_validation_rule_trigger(rule_key, rule_name):
    """Generate validation rule without system bypass logic."""
    vr_name = f"{rule_key.replace(':', '_').replace('-', '_')}_ValidationRule"
    
    vr_xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<ValidationRule xmlns="http://soap.sforce.com/2006/04/metadata">
    <fullName>{vr_name}</fullName>
    <active>true</active>
    <description>Validation rule created to trigger rule: {rule_name}</description>
    <errorConditionFormula>
        ISBLANK(Name)
    </errorConditionFormula>
    <errorMessage>Name is required</errorMessage>
</ValidationRule>'''

    return vr_name, vr_xml

def generate_settings_trigger(rule_key, rule_name):
    """Generate security settings that trigger rules."""
    settings_xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<SecuritySettings xmlns="http://soap.sforce.com/2006/04/metadata">
    <networkAccess>
        <ipRanges>
            <description>Allow all IP ranges</description>
            <end>255.255.255.255</end>
            <start>0.0.0.0</start>
        </ipRanges>
    </networkAccess>
    
    <passwordPolicies>
        <complexity>NoRestriction</complexity>
        <expiration>Never</expiration>
        <historyRestriction>NoRestriction</historyRestriction>
        <lockoutInterval>FifteenMinutes</lockoutInterval>
        <maxLoginAttempts>999</maxLoginAttempts>
        <minimumPasswordLength>1</minimumPasswordLength>
        <minimumPasswordLifetime>false</minimumPasswordLifetime>
        <obscureSecretAnswer>false</obscureSecretAnswer>
        <questionRestriction>DoesNotContainPassword</questionRestriction>
    </passwordPolicies>
    
    <sessionSettings>
        <disableTimeoutWarning>true</disableTimeoutWarning>
        <enableBuiltinScreening>false</enableBuiltinScreening>
        <enableCSPOnEmail>false</enableCSPOnEmail>
        <enableCSRFOnGet>false</enableCSRFOnGet>
        <enableCSRFOnPost>false</enableCSRFOnPost>
        <enableCacheAndAutocomplete>true</enableCacheAndAutocomplete>
        <enableClickjackNonsetupSFDC>false</enableClickjackNonsetupSFDC>
        <enableClickjackNonsetupUser>false</enableClickjackNonsetupUser>
        <enableClickjackNonsetupUserHeaderless>false</enableClickjackNonsetupUserHeaderless>
        <enableClickjackSetup>false</enableClickjackSetup>
        <enableContentSniffingProtection>false</enableContentSniffingProtection>
        <enablePostForSessions>false</enablePostForSessions>
        <enableSMSIdentity>false</enableSMSIdentity>
        <enableU2F>false</enableU2F>
        <enableXssProtection>false</enableXssProtection>
        <enforceIpRangesEveryRequest>false</enforceIpRangesEveryRequest>
        <forceRelogin>false</forceRelogin>
        <lockSessionsToIp>false</lockSessionsToIp>
        <lockSessionsToDomain>false</lockSessionsToDomain>
        <logoutURL></logoutURL>
        <redirectionWarning>false</redirectionWarning>
        <referrerPolicy>false</referrerPolicy>
        <requireHttps>false</requireHttps>
        <requireHttpsForChatterFiles>false</requireHttpsForChatterFiles>
        <sessionTimeout>TwentyFourHours</sessionTimeout>
    </sessionSettings>
</SecuritySettings>'''

    return "Security", settings_xml

def generate_custom_metadata_trigger(rule_key, rule_name):
    """Generate custom metadata without description."""
    cmd_name = f"{rule_key.replace(':', '_').replace('-', '_')}_CustomMetadata__mdt"
    
    cmd_xml = f'''<?xml version="1.0" encoding="UTF-8"?>
<CustomMetadata xmlns="http://soap.sforce.com/2006/04/metadata">
    <label>{cmd_name.replace('_', ' ')}</label>
    <protected>false</protected>
    <values>
        <field>MasterLabel</field>
        <value xsi:type="xsd:string">{rule_name}</value>
    </values>
    <values>
        <field>DeveloperName</field>
        <value xsi:type="xsd:string">{cmd_name}</value>
    </values>
    <values>
        <field>Value__c</field>
        <value xsi:type="xsd:string">Test Value</value>
    </values>
</CustomMetadata>'''

    return cmd_name, cmd_xml

def write_file(file_path, content):
    """Write content to a file."""
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Main function to generate all metadata rule triggers."""
    print("Generating Salesforce metadata rule triggers...")
    
    # Read all rules from CSV files
    rules = read_csv_files('./sfmeta-split')
    print(f"Found {len(rules)} metadata rules to process")
    
    # Create directory structure
    create_directory_structure()
    
    # Generate triggers for each rule
    generated_files = []
    
    for rule in rules:
        rule_key = rule['rules_key']
        rule_name = rule['rules_name']
        rule_type = rule['rules_type']
        
        try:
            # Generate different types of metadata based on rule characteristics
            if 'Profile' in rule_name or 'profile' in rule_key.lower():
                name, content = generate_profile_trigger(rule_key, rule_name)
                file_path = f"force-app/main/default/profiles/{name}.profile-meta.xml"
                write_file(file_path, content)
                generated_files.append(file_path)
                
            elif 'PermissionSet' in rule_name or 'permissionset' in rule_key.lower():
                name, content = generate_permission_set_trigger(rule_key, rule_name)
                file_path = f"force-app/main/default/permissionsets/{name}.permissionset-meta.xml"
                write_file(file_path, content)
                generated_files.append(file_path)
                
            elif 'Flow' in rule_name or 'flow' in rule_key.lower():
                name, content = generate_flow_trigger(rule_key, rule_name)
                file_path = f"force-app/main/default/flows/{name}.flow-meta.xml"
                write_file(file_path, content)
                generated_files.append(file_path)
                
            elif 'Workflow' in rule_name or 'workflow' in rule_key.lower():
                name, content = generate_workflow_trigger(rule_key, rule_name)
                file_path = f"force-app/main/default/workflows/Account.workflow-meta.xml"
                write_file(file_path, content)
                generated_files.append(file_path)
                
            elif 'Validation' in rule_name or 'validation' in rule_key.lower():
                name, content = generate_validation_rule_trigger(rule_key, rule_name)
                file_path = f"force-app/main/default/objects/Account/validationRules/{name}.validationRule-meta.xml"
                write_file(file_path, content)
                generated_files.append(file_path)
                
            elif 'SecuritySettings' in rule_name or 'security' in rule_key.lower():
                name, content = generate_settings_trigger(rule_key, rule_name)
                file_path = f"force-app/main/default/settings/{name}.settings-meta.xml"
                write_file(file_path, content)
                generated_files.append(file_path)
                
            elif 'CustomMetadata' in rule_name or 'metadata' in rule_key.lower():
                name, content = generate_custom_metadata_trigger(rule_key, rule_name)
                file_path = f"force-app/main/default/customMetadata/{name}.md-meta.xml"
                write_file(file_path, content)
                generated_files.append(file_path)
                
            else:
                # Default to custom object for other rules
                name, content = generate_custom_object_trigger(rule_key, rule_name)
                file_path = f"force-app/main/default/objects/{name}/{name}.object-meta.xml"
                write_file(file_path, content)
                generated_files.append(file_path)
                
        except Exception as e:
            print(f"Error generating trigger for rule {rule_key}: {e}")
    
    print(f"\nGenerated {len(generated_files)} metadata files:")
    for file_path in sorted(set(generated_files)):
        print(f"  - {file_path}")
    
    # Generate summary report
    summary = {
        'total_rules': len(rules),
        'generated_files': len(set(generated_files)),
        'rule_types': {
            'CODE_SMELL': len([r for r in rules if r['rules_type'] == 'CODE_SMELL']),
            'SECURITY_HOTSPOT': len([r for r in rules if r['rules_type'] == 'SECURITY_HOTSPOT']),
            'VULNERABILITY': len([r for r in rules if r['rules_type'] == 'VULNERABILITY']),
            'BUG': len([r for r in rules if r['rules_type'] == 'BUG'])
        },
        'severity_distribution': {
            'CRITICAL': len([r for r in rules if r['rules_severity'] == 'CRITICAL']),
            'MAJOR': len([r for r in rules if r['rules_severity'] == 'MAJOR']),
            'MINOR': len([r for r in rules if r['rules_severity'] == 'MINOR'])
        }
    }
    
    with open('sfmeta_generation_summary.json', 'w') as f:
        json.dump(summary, f, indent=2)
    
    print(f"\nSummary:")
    print(f"  Total rules processed: {summary['total_rules']}")
    print(f"  Files generated: {summary['generated_files']}")
    print(f"  Rule types: {summary['rule_types']}")
    print(f"  Severity distribution: {summary['severity_distribution']}")
    print(f"  Summary saved to: sfmeta_generation_summary.json")

if __name__ == "__main__":
    main()