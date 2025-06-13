/**
 * Controller for VfPageWithJavaScriptViolations.page
 * This class also demonstrates various Apex rule violations
 */
public class VfPageController {
    
    public String accountName { get; set; }
    
    // BAD: DML in constructor (sf:Csrf rule)
    public VfPageController() {
        Account defaultAccount = new Account(Name = 'Default VF Account');
        insert defaultAccount;
        
        this.accountName = defaultAccount.Name;
        
        // BAD: System.debug in constructor
        System.debug('VF Controller initialized with account: ' + accountName);
    }
    
    public PageReference processAccount() {
        // BAD: Hard-coded error message
        if (String.isBlank(accountName)) {
            ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR, 'Account name cannot be empty'));
            return null;
        }
        
        // BAD: SOQL in loop potential
        List<Account> existingAccounts = [SELECT Id, Name FROM Account WHERE Name LIKE '%' + accountName + '%'];
        
        for (Account acc : existingAccounts) {
            // BAD: DML inside loop
            acc.Description = 'Updated from VF page';
            update acc;
            
            // BAD: System.debug in production code
            System.debug('Updated account: ' + acc.Name);
        }
        
        return new PageReference('/apex/success');
    }
    
    public List<SelectOption> getAccountTypes() {
        List<SelectOption> options = new List<SelectOption>();
        
        // BAD: Hard-coded values instead of using Schema
        options.add(new SelectOption('Customer', 'Customer'));
        options.add(new SelectOption('Partner', 'Partner'));
        options.add(new SelectOption('Prospect', 'Prospect'));
        
        return options;
    }
    
    // BAD: Long method name
    public void performComplexAccountProcessingWithVeryLongMethodName() {
        // BAD: Empty catch block
        try {
            List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 10];
            for (Account acc : accounts) {
                acc.Name = acc.Name.toUpperCase();
            }
            update accounts;
        } catch (Exception e) {
            // BAD: Empty catch block
        }
    }
} 