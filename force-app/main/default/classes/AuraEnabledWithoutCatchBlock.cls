/**
 * This class demonstrates violation of sf:AuraEnabledWithoutCatchBlock rule
 * @AuraEnabled actions require error handling and should throw AuraHandledException
 */
public class AuraEnabledWithoutCatchBlock {
    
    @AuraEnabled
    public static List<Account> getAccounts() {
        // BAD: No try-catch block for @AuraEnabled method
        return [SELECT Id, Name, Phone FROM Account LIMIT 10];
    }
    
    @AuraEnabled
    public static void updateAccount(String accountId, String newName) {
        // BAD: No error handling for @AuraEnabled method that performs DML
        Account acc = [SELECT Id, Name FROM Account WHERE Id = :accountId];
        acc.Name = newName;
        update acc;
    }
    
    @AuraEnabled
    public static String processComplexLogic(String inputData) {
        // BAD: Complex logic without error handling
        List<String> dataList = inputData.split(',');
        String result = '';
        
        for (String data : dataList) {
            Integer numValue = Integer.valueOf(data); // This could throw an exception
            result += String.valueOf(numValue * 2) + ',';
        }
        
        return result.removeEnd(',');
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsForAccount(String accountId) {
        // BAD: Even cacheable methods should have error handling
        return [SELECT Id, Name, Email FROM Contact WHERE AccountId = :accountId];
    }
    
    @AuraEnabled
    public static void deleteRecord(String recordId) {
        // BAD: DML operation without proper error handling
        Account acc = [SELECT Id FROM Account WHERE Id = :recordId];
        delete acc;
    }
} 