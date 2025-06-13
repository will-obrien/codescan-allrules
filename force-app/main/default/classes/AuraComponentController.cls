/**
 * Controller for AccountProcessorComponent Lightning component
 * This class demonstrates various Apex rule violations
 */
public class AuraComponentController {
    
    @AuraEnabled
    public static Account getAccountById(String accountId) {
        // BAD: No try-catch block for @AuraEnabled method (sf:AuraEnabledWithoutCatchBlock rule)
        return [SELECT Id, Name, Type, Phone, BillingCity FROM Account WHERE Id = :accountId];
    }
    
    @AuraEnabled
    public static List<Contact> getContactsByAccount(String accountId) {
        // BAD: No error handling for @AuraEnabled method
        List<Contact> contacts = [SELECT Id, Name, Email, Phone FROM Contact WHERE AccountId = :accountId];
        
        // BAD: SOQL in loop potential
        for (Contact con : contacts) {
            List<Case> cases = [SELECT Id FROM Case WHERE ContactId = :con.Id];
            con.Description = 'Has ' + cases.size() + ' cases';
        }
        
        return contacts;
    }
    
    @AuraEnabled
    public static String processAccountData(String accountId, String accountName) {
        // BAD: No try-catch for @AuraEnabled method with DML
        Account acc = [SELECT Id, Name, Description FROM Account WHERE Id = :accountId];
        
        // BAD: Hard-coded error message
        if (String.isBlank(accountName)) {
            throw new AuraHandledException('Account name cannot be empty');
        }
        
        acc.Name = accountName;
        acc.Description = 'Updated by Lightning component';
        
        // BAD: System.debug in production code
        System.debug('Updating account: ' + acc.Name);
        
        update acc;
        
        return 'Account updated successfully';
    }
    
    @AuraEnabled
    public static void deleteAccountData(String accountId) {
        // BAD: No error handling for dangerous DML operation
        Account acc = [SELECT Id FROM Account WHERE Id = :accountId];
        delete acc;
        
        // BAD: System.debug after dangerous operation
        System.debug('Account deleted: ' + accountId);
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccounts(String searchTerm) {
        // BAD: Even cacheable methods should have error handling
        String searchQuery = '%' + searchTerm + '%';
        return [SELECT Id, Name, Type FROM Account WHERE Name LIKE :searchQuery LIMIT 10];
    }
    
    // BAD: Long method name
    public static void performComplexAccountProcessingWithExcessivelyLongMethodName() {
        // BAD: Empty catch block
        try {
            List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 5];
            for (Account acc : accounts) {
                acc.Description = 'Processed';
            }
            update accounts;
        } catch (Exception e) {
            // BAD: Empty catch block
        }
    }
} 