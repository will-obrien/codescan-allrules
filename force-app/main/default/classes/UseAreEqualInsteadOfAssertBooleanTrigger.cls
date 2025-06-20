@IsTest
public class UseAreEqualInsteadOfAssertBooleanTrigger {
    // This class triggers the rule: sf:UseAreEqualInsteadOfAssertBoolean by using boolean equality when areEqual is better
    
    @IsTest
    static void testAccountTypeComparison() {
        // Triggers sf:UseAreEqualInsteadOfAssertBoolean - comparing specific values using boolean logic
        Account acc = new Account(Name = 'Test Account', Type = 'Customer');
        insert acc;
        
        Account retrievedAcc = [SELECT Type FROM Account WHERE Id = :acc.Id];
        
        // Should use System.assertEquals('Customer', retrievedAcc.Type)
        System.assert(retrievedAcc.Type == 'Customer');
        System.assert('Customer'.equals(retrievedAcc.Type));
    }
    
    @IsTest
    static void testStatusComparison() {
        // Triggers sf:UseAreEqualInsteadOfAssertBoolean - status field comparison
        Contact con = new Contact(
            FirstName = 'Test',
            LastName = 'Contact',
            LeadSource = 'Web'
        );
        insert con;
        
        Contact retrievedCon = [SELECT LeadSource FROM Contact WHERE Id = :con.Id];
        
        // Should use System.assertEquals('Web', retrievedCon.LeadSource)
        System.assert(retrievedCon.LeadSource == 'Web');
        System.assert('Web'.equals(retrievedCon.LeadSource));
    }
    
    @IsTest
    static void testNumericValueComparison() {
        // Triggers sf:UseAreEqualInsteadOfAssertBoolean - numeric value comparison
        Account acc = new Account(Name = 'Test Account', NumberOfEmployees = 100);
        insert acc;
        
        Account retrievedAcc = [SELECT NumberOfEmployees FROM Account WHERE Id = :acc.Id];
        
        // Should use System.assertEquals(100, retrievedAcc.NumberOfEmployees)
        System.assert(retrievedAcc.NumberOfEmployees == 100);
        System.assert(100 == retrievedAcc.NumberOfEmployees);
    }
    
    @IsTest
    static void testListSizeAssertion() {
        // Triggers sf:UseAreEqualInsteadOfAssertBoolean - list size comparison
        List<Account> accounts = new List<Account>();
        for (Integer i = 0; i < 5; i++) {
            accounts.add(new Account(Name = 'Account ' + i));
        }
        insert accounts;
        
        List<Account> retrievedAccounts = [SELECT Id FROM Account];
        
        // Should use System.assertEquals(5, retrievedAccounts.size())
        System.assert(retrievedAccounts.size() == 5);
        System.assert(5 == retrievedAccounts.size());
    }
    
    @IsTest
    static void testDateComparison() {
        // Triggers sf:UseAreEqualInsteadOfAssertBoolean - date comparison
        Date today = Date.today();
        Date testDate = Date.today();
        
        // Should use System.assertEquals(today, testDate)
        System.assert(today == testDate);
        System.assert(today.isSameDay(testDate));
    }
    
    @IsTest
    static void testIdComparison() {
        // Triggers sf:UseAreEqualInsteadOfAssertBoolean - ID comparison
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        Id expectedId = acc.Id;
        Id actualId = [SELECT Id FROM Account WHERE Name = 'Test Account'].Id;
        
        // Should use System.assertEquals(expectedId, actualId)
        System.assert(expectedId == actualId);
        System.assert(expectedId.equals(actualId));
    }
    
    @IsTest
    static void testDecimalComparison() {
        // Triggers sf:UseAreEqualInsteadOfAssertBoolean - decimal value comparison
        Decimal expected = 99.99;
        Decimal actual = calculatePrice();
        
        // Should use System.assertEquals(expected, actual)
        System.assert(expected == actual);
        System.assert(actual.equals(expected));
    }
    
    @IsTest
    static void testEnumComparison() {
        // Triggers sf:UseAreEqualInsteadOfAssertBoolean - enum/picklist comparison
        Account acc = new Account(Name = 'Test Account', Rating = 'Hot');
        insert acc;
        
        Account retrievedAcc = [SELECT Rating FROM Account WHERE Id = :acc.Id];
        
        // Should use System.assertEquals('Hot', retrievedAcc.Rating)
        System.assert(retrievedAcc.Rating == 'Hot');
        System.assert('Hot'.equals(retrievedAcc.Rating));
    }
    
    private static Decimal calculatePrice() {
        return 99.99;
    }
}