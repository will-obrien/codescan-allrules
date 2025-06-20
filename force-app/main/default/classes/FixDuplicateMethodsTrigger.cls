public class FixDuplicateMethodsTrigger {
    // This class triggers the rule: sf:FixDuplicateMethods by having methods with identical implementations
    
    public void processAccount(Account acc) {
        // Method implementation that will be duplicated
        if (acc != null) {
            System.debug('Processing account: ' + acc.Name);
            acc.Description = 'Processed on ' + System.now();
            update acc;
        }
    }
    
    public void handleAccount(Account acc) {
        // Triggers sf:FixDuplicateMethods - identical implementation to processAccount
        if (acc != null) {
            System.debug('Processing account: ' + acc.Name);
            acc.Description = 'Processed on ' + System.now();
            update acc;
        }
    }
    
    public String validateEmail(String email) {
        // Method implementation that will be duplicated
        if (String.isBlank(email)) {
            return 'Email is required';
        }
        if (!email.contains('@')) {
            return 'Invalid email format';
        }
        if (email.length() > 80) {
            return 'Email too long';
        }
        return 'Valid';
    }
    
    public String checkEmail(String email) {
        // Triggers sf:FixDuplicateMethods - identical implementation to validateEmail
        if (String.isBlank(email)) {
            return 'Email is required';
        }
        if (!email.contains('@')) {
            return 'Invalid email format';
        }
        if (email.length() > 80) {
            return 'Email too long';
        }
        return 'Valid';
    }
    
    public List<Contact> getActiveContacts(Id accountId) {
        // Method implementation that will be duplicated
        List<Contact> contacts = new List<Contact>();
        if (accountId != null) {
            contacts = [SELECT Id, Name, Email FROM Contact 
                       WHERE AccountId = :accountId 
                       AND Email != null 
                       ORDER BY Name];
        }
        return contacts;
    }
    
    public List<Contact> fetchActiveContacts(Id accountId) {
        // Triggers sf:FixDuplicateMethods - identical implementation to getActiveContacts
        List<Contact> contacts = new List<Contact>();
        if (accountId != null) {
            contacts = [SELECT Id, Name, Email FROM Contact 
                       WHERE AccountId = :accountId 
                       AND Email != null 
                       ORDER BY Name];
        }
        return contacts;
    }
    
    public Integer calculateScore(Integer value1, Integer value2) {
        // Method implementation that will be duplicated
        Integer result = 0;
        if (value1 != null && value2 != null) {
            result = value1 + value2;
            if (result > 100) {
                result = 100;
            }
        }
        return result;
    }
    
    public Integer computeScore(Integer value1, Integer value2) {
        // Triggers sf:FixDuplicateMethods - identical implementation to calculateScore
        Integer result = 0;
        if (value1 != null && value2 != null) {
            result = value1 + value2;
            if (result > 100) {
                result = 100;
            }
        }
        return result;
    }
    
    public Boolean isValidAccount(Account acc) {
        // Method implementation that will be duplicated
        if (acc == null) {
            return false;
        }
        if (String.isBlank(acc.Name)) {
            return false;
        }
        if (acc.Name.length() < 2) {
            return false;
        }
        return true;
    }
    
    public Boolean checkAccountValidity(Account acc) {
        // Triggers sf:FixDuplicateMethods - identical implementation to isValidAccount
        if (acc == null) {
            return false;
        }
        if (String.isBlank(acc.Name)) {
            return false;
        }
        if (acc.Name.length() < 2) {
            return false;
        }
        return true;
    }
    
    private void logMessage(String message) {
        // Method implementation that will be duplicated
        if (!String.isBlank(message)) {
            System.debug('LOG: ' + System.now() + ' - ' + message);
        }
    }
    
    private void writeLog(String message) {
        // Triggers sf:FixDuplicateMethods - identical implementation to logMessage
        if (!String.isBlank(message)) {
            System.debug('LOG: ' + System.now() + ' - ' + message);
        }
    }
}