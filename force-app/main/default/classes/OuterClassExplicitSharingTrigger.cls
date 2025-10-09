public class OuterClassExplicitSharingTrigger {
    // This class triggers the rule: sf:OuterClassExplicitSharing by not having explicit sharing
    // while containing inner classes that do have explicit sharing
    
    public void processAccounts() {
        // Outer class lacks explicit sharing but contains inner classes with sharing
        List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 5];
        
        // Using inner class with sharing
        WithSharingHelper helper = new WithSharingHelper();
        helper.processData(accounts);
        
        // Using inner class without sharing
        WithoutSharingHelper adminHelper = new WithoutSharingHelper();
        adminHelper.processAdminData(accounts);
    }
    
    // Inner class with explicit sharing
    public with sharing class WithSharingHelper {
        public void processData(List<Account> accounts) {
            for (Account acc : accounts) {
                System.debug('Processing account with sharing: ' + acc.Name);
            }
        }
        
        public List<Contact> getContacts() {
            return [SELECT Id, Name FROM Contact LIMIT 10];
        }
    }
    
    // Inner class without explicit sharing
    public without sharing class WithoutSharingHelper {
        public void processAdminData(List<Account> accounts) {
            for (Account acc : accounts) {
                System.debug('Processing account without sharing: ' + acc.Name);
            }
        }
        
        public List<User> getAllUsers() {
            return [SELECT Id, Name FROM User];
        }
    }
    
    // Another inner class with inherited sharing
    public inherited sharing class InheritedSharingHelper {
        public void processInheritedData(List<Account> accounts) {
            for (Account acc : accounts) {
                System.debug('Processing account with inherited sharing: ' + acc.Name);
            }
        }
    }
    
    public void demonstrateIssue() {
        // This outer class should have explicit sharing declaration
        // since it contains inner classes with different sharing modes
        System.debug('Outer class processing without explicit sharing declaration');
    }
}