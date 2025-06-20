public class NcinoTriggerHandlerTrigger {
    // This class triggers the rule: sf:NcinoTriggerHandler by not following nCino trigger handler framework
    // Should extend nCino's TriggerHandler base class but doesn't
    
    public void handleBeforeInsert(List<Account> newAccounts) {
        // Triggers sf:NcinoTriggerHandler - trigger logic not following nCino framework
        for (Account acc : newAccounts) {
            if (String.isBlank(acc.Name)) {
                acc.addError('Account name is required');
            }
            
            // Business logic that should be in nCino handler framework
            validateAccountData(acc);
        }
    }
    
    public void handleAfterInsert(List<Account> newAccounts) {
        // Triggers sf:NcinoTriggerHandler - after insert logic not using nCino pattern
        List<Contact> contactsToInsert = new List<Contact>();
        
        for (Account acc : newAccounts) {
            Contact con = new Contact(
                FirstName = 'Default',
                LastName = 'Contact',
                AccountId = acc.Id
            );
            contactsToInsert.add(con);
        }
        
        if (!contactsToInsert.isEmpty()) {
            insert contactsToInsert;
        }
    }
    
    public void handleBeforeUpdate(List<Account> newAccounts, Map<Id, Account> oldAccountMap) {
        // Triggers sf:NcinoTriggerHandler - before update logic not using nCino framework
        for (Account acc : newAccounts) {
            Account oldAccount = oldAccountMap.get(acc.Id);
            
            if (acc.AnnualRevenue != oldAccount.AnnualRevenue) {
                updateRevenueHistory(acc, oldAccount);
            }
        }
    }
    
    public void handleAfterUpdate(List<Account> newAccounts, Map<Id, Account> oldAccountMap) {
        // Triggers sf:NcinoTriggerHandler - after update logic not following nCino pattern
        Set<Id> accountIds = new Set<Id>();
        
        for (Account acc : newAccounts) {
            accountIds.add(acc.Id);
        }
        
        updateRelatedRecords(accountIds);
    }
    
    private void validateAccountData(Account acc) {
        // Business logic that should be in nCino handler framework
        if (acc.Type == null) {
            acc.Type = 'Prospect';
        }
        
        if (acc.BillingCountry == null) {
            acc.BillingCountry = 'United States';
        }
    }
    
    private void updateRevenueHistory(Account newAcc, Account oldAcc) {
        // Revenue tracking logic not using nCino framework
        System.debug('Revenue changed from ' + oldAcc.AnnualRevenue + ' to ' + newAcc.AnnualRevenue);
    }
    
    private void updateRelatedRecords(Set<Id> accountIds) {
        // Related record processing not using nCino framework
        List<Contact> contacts = [SELECT Id, AccountId FROM Contact WHERE AccountId IN :accountIds];
        
        for (Contact con : contacts) {
            con.Description = 'Updated via trigger - ' + System.now();
        }
        
        if (!contacts.isEmpty()) {
            update contacts;
        }
    }
}