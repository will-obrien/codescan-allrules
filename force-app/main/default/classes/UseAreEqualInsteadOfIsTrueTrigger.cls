@IsTest
public class UseAreEqualInsteadOfIsTrueTrigger {
    // This class triggers the rule: sf:UseAreEqualInsteadOfIsTrue by using Assert.isTrue instead of Assert.areEqual
    
    @IsTest
    static void testAccountNameComparison() {
        // Triggers sf:UseAreEqualInsteadOfIsTrue - should use Assert.areEqual
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        Account retrievedAcc = [SELECT Name FROM Account WHERE Id = :acc.Id];
        
        // Should use Assert.areEqual('Test Account', retrievedAcc.Name)
        System.assert(retrievedAcc.Name == 'Test Account');
        System.assert('Test Account'.equals(retrievedAcc.Name));
    }
    
    @IsTest
    static void testStringComparisons() {
        // Triggers sf:UseAreEqualInsteadOfIsTrue - multiple isTrue assertions for equality
        String expected = 'Expected Value';
        String actual = 'Expected Value';
        
        // Should use Assert.areEqual(expected, actual)
        System.assert(expected == actual);
        System.assert(expected.equals(actual));
        System.assert(actual.compareTo(expected) == 0);
    }
    
    @IsTest
    static void testNumericComparisons() {
        // Triggers sf:UseAreEqualInsteadOfIsTrue - numeric equality using assert
        Integer expected = 100;
        Integer actual = calculateValue();
        
        // Should use Assert.areEqual(expected, actual)
        System.assert(expected == actual);
        System.assert(actual.equals(expected));
    }
    
    @IsTest
    static void testBooleanComparisons() {
        // Triggers sf:UseAreEqualInsteadOfIsTrue - boolean equality
        Boolean expected = true;
        Boolean actual = performOperation();
        
        // Should use Assert.areEqual(expected, actual)
        System.assert(expected == actual);
        System.assert(expected.equals(actual));
    }
    
    @IsTest
    static void testListSizeComparison() {
        // Triggers sf:UseAreEqualInsteadOfIsTrue - list size comparison
        List<Account> accounts = new List<Account>();
        accounts.add(new Account(Name = 'Test 1'));
        accounts.add(new Account(Name = 'Test 2'));
        
        // Should use Assert.areEqual(2, accounts.size())
        System.assert(accounts.size() == 2);
        System.assert(2 == accounts.size());
    }
    
    @IsTest
    static void testIdComparison() {
        // Triggers sf:UseAreEqualInsteadOfIsTrue - ID equality
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        Id expectedId = acc.Id;
        Id actualId = [SELECT Id FROM Account WHERE Name = 'Test Account'].Id;
        
        // Should use Assert.areEqual(expectedId, actualId)
        System.assert(expectedId == actualId);
        System.assert(expectedId.equals(actualId));
    }
    
    @IsTest
    static void testRecordTypeComparison() {
        // Triggers sf:UseAreEqualInsteadOfIsTrue - record type comparison
        try {
            RecordType rt = [SELECT Id, Name FROM RecordType WHERE SObjectType = 'Account' LIMIT 1];
            String expectedName = rt.Name;
            String actualName = rt.Name;
            
            // Should use Assert.areEqual(expectedName, actualName)
            System.assert(expectedName == actualName);
        } catch (Exception e) {
            // No record types available
            System.assert(true);
        }
    }
    
    @IsTest
    static void testMyCase() {
        boolean result = (1 == 1);
        Assert.isTrue(result, 'Should use Assert.areEqual');
    }
    
    private static Integer calculateValue() {
        return 100;
    }
    
    private static Boolean performOperation() {
        return true;
    }
}