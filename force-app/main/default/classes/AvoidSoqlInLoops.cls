/**
 * This class demonstrates violation of sf:AvoidSoqlInLoops rule
 * SOQL and DML calls within loops can cause governor limit exceptions
 */
public class AvoidSoqlInLoops {
    
    public void processAccounts() {
        List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 10];
        
        for (Account acc : accounts) {
            // BAD: SOQL inside loop - will cause governor limit issues
            List<Contact> contacts = [SELECT Id, Name FROM Contact WHERE AccountId = :acc.Id];
            
            for (Contact con : contacts) {
                // BAD: DML inside nested loop - even worse!
                con.Description = 'Updated in loop';
                update con;
            }
        }
    }
    
    public void anotherBadExample() {
        for (Integer i = 0; i < 10; i++) {
            // BAD: SOQL in for loop
            List<User> users = [SELECT Id, Name FROM User WHERE IsActive = true LIMIT 1];
            
            if (!users.isEmpty()) {
                // BAD: DML in loop
                User u = users[0];
                u.Title = 'Updated Title ' + i;
                update u;
            }
        }
    }
} 