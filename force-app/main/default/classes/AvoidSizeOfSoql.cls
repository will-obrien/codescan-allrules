/**
 * This class demonstrates violation of sf:AvoidSizeOfSoql rule
 * It's better to use an aggregate call like select COUNT() from table.
 */
public class AvoidSizeOfSoql {
    
    public Integer getAccountCount() {
        // BAD: Using size() on SOQL query
        return [SELECT Id FROM Account].size();
    }
    
    public Boolean hasActiveUsers() {
        // BAD: Using size() to check existence
        return [SELECT Id FROM User WHERE IsActive = true].size() > 0;
    }
    
    public void processContacts() {
        // BAD: Using size() for comparison
        if ([SELECT Id FROM Contact WHERE Email != null].size() > 100) {
            System.debug('Many contacts with email');
        }
        
        // BAD: Using size() in variable assignment
        Integer contactCount = [SELECT Id FROM Contact WHERE AccountId != null].size();
        System.debug('Contact count: ' + contactCount);
    }
    
    public Map<String, Integer> getRecordCounts() {
        Map<String, Integer> counts = new Map<String, Integer>();
        
        // BAD: Multiple size() calls on SOQL
        counts.put('Accounts', [SELECT Id FROM Account].size());
        counts.put('Contacts', [SELECT Id FROM Contact].size());
        counts.put('Opportunities', [SELECT Id FROM Opportunity].size());
        counts.put('Cases', [SELECT Id FROM Case].size());
        
        return counts;
    }
    
    public void validateDataSize() {
        // BAD: Using size() in conditional logic
        List<Account> accounts = [SELECT Id, Name FROM Account WHERE Type = 'Customer'];
        if (accounts.size() == 0) {
            System.debug('No customer accounts found');
        }
        
        // BAD: Using size() in loop condition
        List<Contact> contacts = [SELECT Id FROM Contact WHERE LastModifiedDate = TODAY];
        for (Integer i = 0; i < contacts.size(); i++) {
            System.debug('Processing contact ' + i);
        }
    }
    
    public Integer calculateTotalRecords() {
        // BAD: Multiple size() calls for calculation
        Integer total = 0;
        total += [SELECT Id FROM Account].size();
        total += [SELECT Id FROM Contact].size();
        total += [SELECT Id FROM Lead].size();
        
        return total;
    }
} 