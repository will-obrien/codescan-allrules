@IsTest
public class UseIsTrueInsteadOfAreEqualTrigger {
    // This class triggers the rule: sf:UseIsTrueInsteadOfAreEqual by using Assert.areEqual for boolean true comparisons
    
    @IsTest
    static void testBooleanTrueComparison() {
        // Triggers sf:UseIsTrueInsteadOfAreEqual - should use Assert.isTrue
        Boolean result = performValidation();
        
        // Should use System.assert(result) or Assert.isTrue(result)
        System.assertEquals(true, result);
        System.assertEquals(result, true);
    }
    
    @IsTest
    static void testAccountActiveStatus() {
        // Triggers sf:UseIsTrueInsteadOfAreEqual - boolean field comparison
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        Boolean isActive = acc.Id != null;
        
        // Should use System.assert(isActive)
        System.assertEquals(true, isActive);
        System.assertEquals(isActive, true);
    }
    
    @IsTest
    static void testStringValidation() {
        // Triggers sf:UseIsTrueInsteadOfAreEqual - string validation boolean result
        String testString = 'Valid String';
        Boolean isValid = !String.isBlank(testString);
        
        // Should use System.assert(isValid)
        System.assertEquals(true, isValid);
        System.assertEquals(isValid, true);
    }
    
    @IsTest
    static void testListEmptyCheck() {
        // Triggers sf:UseIsTrueInsteadOfAreEqual - list empty check boolean
        List<Account> accounts = [SELECT Id FROM Account LIMIT 5];
        Boolean hasRecords = !accounts.isEmpty();
        
        // Should use System.assert(hasRecords)
        System.assertEquals(true, hasRecords);
        System.assertEquals(hasRecords, true);
    }
    
    @IsTest
    static void testPermissionCheck() {
        // Triggers sf:UseIsTrueInsteadOfAreEqual - permission boolean check
        Boolean canCreate = Schema.sObjectType.Account.isCreateable();
        Boolean canRead = Schema.sObjectType.Account.isAccessible();
        
        // Should use System.assert(canCreate) and System.assert(canRead)
        System.assertEquals(true, canCreate);
        System.assertEquals(true, canRead);
        System.assertEquals(canCreate, true);
        System.assertEquals(canRead, true);
    }
    
    @IsTest
    static void testCalculationResult() {
        // Triggers sf:UseIsTrueInsteadOfAreEqual - calculation boolean result
        Integer value1 = 10;
        Integer value2 = 5;
        Boolean isGreater = value1 > value2;
        Boolean isPositive = value1 > 0;
        
        // Should use System.assert(isGreater) and System.assert(isPositive)
        System.assertEquals(true, isGreater);
        System.assertEquals(true, isPositive);
        System.assertEquals(isGreater, true);
        System.assertEquals(isPositive, true);
    }
    
    @IsTest
    static void testContainsCheck() {
        // Triggers sf:UseIsTrueInsteadOfAreEqual - contains method boolean result
        String fullText = 'This is a test string';
        Boolean containsTest = fullText.contains('test');
        Boolean startsWithThis = fullText.startsWith('This');
        
        // Should use System.assert(containsTest) and System.assert(startsWithThis)
        System.assertEquals(true, containsTest);
        System.assertEquals(true, startsWithThis);
        System.assertEquals(containsTest, true);
        System.assertEquals(startsWithThis, true);
    }
    
    @IsTest
    static void testRecordExists() {
        // Triggers sf:UseIsTrueInsteadOfAreEqual - record existence check
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        Boolean recordExists = [SELECT COUNT() FROM Account WHERE Id = :acc.Id] > 0;
        
        // Should use System.assert(recordExists)
        System.assertEquals(true, recordExists);
        System.assertEquals(recordExists, true);
    }
    
    private static Boolean performValidation() {
        return true;
    }
}