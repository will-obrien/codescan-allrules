public class NcinoAvoidDescribeMapInLoopsTrigger {
    // This class triggers the rule: sf:NcinoAvoidDescribeMapInLoops by using getDescribe and getMap inside loops
    
    public void processMultipleObjects(List<String> objectNames) {
        // Triggers sf:NcinoAvoidDescribeMapInLoops - getDescribe in loop
        for (String objectName : objectNames) {
            // Should move describe calls outside the loop
            Schema.SObjectType objType = Schema.getGlobalDescribe().get(objectName);
            Schema.DescribeSObjectResult describe = objType.getDescribe();
            
            System.debug('Object: ' + describe.getName() + ', Label: ' + describe.getLabel());
            
            // More describe calls in loop
            Map<String, Schema.SObjectField> fieldsMap = describe.fields.getMap();
            System.debug('Field count: ' + fieldsMap.size());
        }
    }
    
    public void validateFields(List<Account> accounts, List<String> fieldNames) {
        // Triggers sf:NcinoAvoidDescribeMapInLoops - field describe in loop
        for (Account acc : accounts) {
            // Should cache describe results outside loop
            Schema.DescribeSObjectResult accountDescribe = Account.SObjectType.getDescribe();
            Map<String, Schema.SObjectField> fieldMap = accountDescribe.fields.getMap();
            
            for (String fieldName : fieldNames) {
                if (fieldMap.containsKey(fieldName)) {
                    Schema.DescribeFieldResult fieldDescribe = fieldMap.get(fieldName).getDescribe();
                    System.debug('Field ' + fieldName + ' type: ' + fieldDescribe.getType());
                }
            }
        }
    }
    
    public void checkObjectPermissions(List<String> sobjectTypes) {
        // Triggers sf:NcinoAvoidDescribeMapInLoops - permission checks in loop
        for (String sobjectType : sobjectTypes) {
            // Describe calls should be cached
            Schema.SObjectType objType = Schema.getGlobalDescribe().get(sobjectType);
            if (objType != null) {
                Schema.DescribeSObjectResult describe = objType.getDescribe();
                
                Boolean isCreateable = describe.isCreateable();
                Boolean isAccessible = describe.isAccessible();
                Boolean isUpdateable = describe.isUpdateable();
                Boolean isDeletable = describe.isDeletable();
                
                System.debug('Permissions for ' + sobjectType + 
                           ' - Create: ' + isCreateable + 
                           ', Read: ' + isAccessible + 
                           ', Update: ' + isUpdateable + 
                           ', Delete: ' + isDeletable);
            }
        }
    }
    
    public void processFieldData(List<Contact> contacts) {
        // Triggers sf:NcinoAvoidDescribeMapInLoops - nested describe calls
        for (Contact con : contacts) {
            // Contact describe in loop
            Schema.DescribeSObjectResult contactDescribe = Contact.SObjectType.getDescribe();
            Map<String, Schema.SObjectField> contactFields = contactDescribe.fields.getMap();
            
            // Field validation in loop
            for (String fieldName : contactFields.keySet()) {
                Schema.DescribeFieldResult fieldResult = contactFields.get(fieldName).getDescribe();
                
                if (fieldResult.isUpdateable() && fieldResult.getType() == Schema.DisplayType.Email) {
                    System.debug('Updateable email field: ' + fieldName);
                }
            }
            
            // Account describe in same loop
            if (con.AccountId != null) {
                Schema.DescribeSObjectResult accountDescribe = Account.SObjectType.getDescribe();
                Map<String, Schema.SObjectField> accountFields = accountDescribe.fields.getMap();
                System.debug('Account fields available: ' + accountFields.size());
            }
        }
    }
    
    public void validateCustomObjects(List<String> customObjectNames) {
        // Triggers sf:NcinoAvoidDescribeMapInLoops - custom object describe in loop
        for (String customObjName : customObjectNames) {
            try {
                // Multiple describe operations in loop
                Schema.SObjectType customType = Schema.getGlobalDescribe().get(customObjName);
                Schema.DescribeSObjectResult customDescribe = customType.getDescribe();
                
                System.debug('Custom object: ' + customDescribe.getName());
                System.debug('Is custom: ' + customDescribe.isCustom());
                System.debug('Prefix: ' + customDescribe.getKeyPrefix());
                
                // Field map access in loop
                Map<String, Schema.SObjectField> customFields = customDescribe.fields.getMap();
                
                for (String fieldName : customFields.keySet()) {
                    if (fieldName.endsWith('__c')) {
                        Schema.DescribeFieldResult customFieldDescribe = customFields.get(fieldName).getDescribe();
                        System.debug('Custom field: ' + customFieldDescribe.getName() + 
                                   ', Type: ' + customFieldDescribe.getType());
                    }
                }
            } catch (Exception e) {
                System.debug('Error processing custom object: ' + customObjName + ' - ' + e.getMessage());
            }
        }
    }
    
    public void buildDynamicQuery(List<String> objectTypes, List<String> fieldNames) {
        // Triggers sf:NcinoAvoidDescribeMapInLoops - query building with describe in loop
        for (String objectType : objectTypes) {
            // Describe operations in loop for query building
            Schema.SObjectType objType = Schema.getGlobalDescribe().get(objectType);
            Schema.DescribeSObjectResult objDescribe = objType.getDescribe();
            Map<String, Schema.SObjectField> objFields = objDescribe.fields.getMap();
            
            List<String> validFields = new List<String>();
            
            for (String fieldName : fieldNames) {
                if (objFields.containsKey(fieldName)) {
                    Schema.DescribeFieldResult fieldDescribe = objFields.get(fieldName).getDescribe();
                    
                    if (fieldDescribe.isAccessible()) {
                        validFields.add(fieldName);
                    }
                }
            }
            
            if (!validFields.isEmpty()) {
                String query = 'SELECT ' + String.join(validFields, ', ') + ' FROM ' + objectType + ' LIMIT 10';
                System.debug('Dynamic query: ' + query);
            }
        }
    }
    
    public void checkRecordTypeAccess(List<String> sobjectNames) {
        // Triggers sf:NcinoAvoidDescribeMapInLoops - record type describe in loop
        for (String sobjectName : sobjectNames) {
            Schema.SObjectType objType = Schema.getGlobalDescribe().get(sobjectName);
            if (objType != null) {
                Schema.DescribeSObjectResult describe = objType.getDescribe();
                
                // Record type map access in loop
                Map<String, Schema.RecordTypeInfo> recordTypes = describe.getRecordTypeInfosByName();
                
                for (String rtName : recordTypes.keySet()) {
                    Schema.RecordTypeInfo rtInfo = recordTypes.get(rtName);
                    System.debug('Record Type: ' + rtName + 
                               ', Available: ' + rtInfo.isAvailable() + 
                               ', Default: ' + rtInfo.isDefaultRecordTypeMapping());
                }
            }
        }
    }
    
    public void badDescribeLoop() {
        for (SObject s : [SELECT Id FROM Account]) {
            Map<String, Schema.SObjectField> fields = s.getSObjectType().getDescribe().fields.getMap(); // Bad: getDescribe/getMap in loop
        }
    }
}