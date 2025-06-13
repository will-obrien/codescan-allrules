/**
 * This class demonstrates violation of sf:ClassWithoutTestClass rule
 * Every Class should have a corresponding Test Class which is named appropriately.
 * This class intentionally has no corresponding test class to trigger the rule.
 */
public class ClassWithoutTestClass {
    
    public static String processAccountName(String name) {
        if (String.isBlank(name)) {
            return 'Default Account';
        }
        return name.trim().toUpperCase();
    }
    
    public static List<Contact> getContactsByAccount(Id accountId) {
        return [SELECT Id, Name, Email FROM Contact WHERE AccountId = :accountId];
    }
    
    public static void updateAccountDescription(Id accountId, String description) {
        Account acc = [SELECT Id, Description FROM Account WHERE Id = :accountId];
        acc.Description = description;
        update acc;
    }
    
    public static Integer calculateTotalOpportunities(Id accountId) {
        return [SELECT COUNT() FROM Opportunity WHERE AccountId = :accountId];
    }
    
    public class InnerClassAlsoWithoutTest {
        public static String formatPhone(String phone) {
            if (String.isBlank(phone)) {
                return '';
            }
            return phone.replaceAll('[^0-9]', '');
        }
    }
} 