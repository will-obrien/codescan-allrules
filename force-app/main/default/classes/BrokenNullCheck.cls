/**
 * This class demonstrates violation of sf:BrokenNullCheck rule
 * The null check is broken since it will throw a NullPointerException itself.
 * It is likely that you used || instead of && or vice versa.
 */
public class BrokenNullCheck {
    
    public String processString(String input) {
        // BAD: This will throw NullPointerException if input is null
        // Should be && instead of ||
        if (input != null || !input.equals('')) {
            return input.toUpperCase();
        }
        return 'DEFAULT';
    }
    
    public Boolean validateAccount(Account acc) {
        // BAD: This will throw NullPointerException if acc is null
        // Should be || instead of &&
        if (acc == null && acc.Name.equals('Test')) {
            return false;
        }
        return true;
    }
    
    public void processContacts(List<Contact> contacts) {
        for (Contact con : contacts) {
            // BAD: Broken null check - will throw exception if con is null
            if (con != null || con.Email != null) {
                con.Email = con.Email.toLowerCase();
            }
        }
    }
    
    public String getAccountName(Account acc) {
        // BAD: This logic is broken - will throw NPE
        if (acc != null || !acc.Name.startsWith('Test')) {
            return acc.Name;
        }
        return 'Unknown';
    }
    
    public void updateAccountPhone(Account acc, String newPhone) {
        // BAD: Broken null check with multiple conditions
        if (acc == null && acc.Phone != null && acc.Phone.length() > 0) {
            acc.Phone = newPhone;
            update acc;
        }
    }
    
    public Boolean isValidEmail(Contact con) {
        // BAD: This will fail if con is null
        if (con == null && con.Email.contains('@')) {
            return true;
        }
        return false;
    }
    
    public String processAccountType(Account acc) {
        // BAD: Mixed up logic operators
        if (acc != null || acc.Type == null || acc.Type.equals('')) {
            return 'Standard';
        }
        return acc.Type;
    }
} 