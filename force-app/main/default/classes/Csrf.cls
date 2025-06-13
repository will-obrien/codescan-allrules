/**
 * This class demonstrates violation of sf:Csrf rule
 * Check to avoid making DML operations in Apex class constructor/action method.
 * This prevents modification of the database just by accessing a page.
 */
public class Csrf {
    
    // BAD: DML in constructor
    public Csrf() {
        Account newAccount = new Account(Name = 'Auto-created Account');
        insert newAccount;
        
        Contact newContact = new Contact(
            LastName = 'Default Contact',
            Email = 'auto@example.com'
        );
        insert newContact;
    }
    
    // BAD: DML in constructor with parameters
    public Csrf(String accountName) {
        Account acc = new Account(Name = accountName);
        insert acc;
        
        // Even worse - deleting records in constructor
        List<Account> accountsToDelete = [SELECT Id FROM Account WHERE Name LIKE '%Test%'];
        delete accountsToDelete;
    }
    
    // BAD: Action method with DML (typically used in Visualforce)
    public PageReference createAccount() {
        Account newAcc = new Account(Name = 'Page Action Account');
        insert newAcc;
        
        return new PageReference('/apex/success');
    }
    
    // BAD: Another action method with DML
    public void processForm() {
        Contact con = new Contact(
            LastName = 'Form Contact',
            Email = 'form@example.com'
        );
        insert con;
        
        // Update existing records
        List<Contact> existingContacts = [SELECT Id, Description FROM Contact LIMIT 5];
        for (Contact c : existingContacts) {
            c.Description = 'Updated by form action';
        }
        update existingContacts;
    }
    
    // BAD: Getter with side effects (DML)
    public List<Account> getAccounts() {
        // This getter actually modifies data - very bad!
        Account sideEffectAccount = new Account(Name = 'Side Effect Account');
        insert sideEffectAccount;
        
        return [SELECT Id, Name FROM Account];
    }
    
    // BAD: Property with DML in getter
    public String currentUserName {
        get {
            // Creating a log record just by accessing a property
            Log__c logRecord = new Log__c(
                Message__c = 'User name accessed',
                Timestamp__c = DateTime.now()
            );
            insert logRecord;
            
            return UserInfo.getName();
        }
        set;
    }
} 