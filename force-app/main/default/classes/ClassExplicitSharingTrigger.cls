public class ClassExplicitSharingTrigger {
    // This class triggers the rule: sf:ClassExplicitSharing by not having explicit sharing declaration
    // Missing: with sharing, without sharing, or inherited sharing
    
    public void processRecords() {
        // Triggers sf:ClassExplicitSharing - class should declare explicit sharing mode
        List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 10];
        
        for (Account acc : accounts) {
            updateAccountData(acc);
        }
    }
    
    public void updateAccountData(Account acc) {
        // This method performs DML operations but the class lacks explicit sharing
        acc.Description = 'Updated by ClassExplicitSharingTrigger';
        update acc;
    }
    
    public List<Contact> getContacts(Id accountId) {
        // SOQL query without explicit sharing context
        return [SELECT Id, Name, Email FROM Contact WHERE AccountId = :accountId];
    }
    
    public void deleteRecords(List<Id> recordIds) {
        // DML operations without explicit sharing declaration
        List<Account> accountsToDelete = [SELECT Id FROM Account WHERE Id IN :recordIds];
        delete accountsToDelete;
    }
}