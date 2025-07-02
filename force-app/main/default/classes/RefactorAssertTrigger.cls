@IsTest
public class RefactorAssertTrigger {
    // This class triggers the rule: sf:RefactorAssert by using System.Assert instead of Assert class methods
    
    @IsTest
    static void testAccountCreation() {
        // Triggers sf:RefactorAssert - should use Assert.areEqual instead of System.assert
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        Account retrievedAcc = [SELECT Name FROM Account WHERE Id = :acc.Id];
        
        // Should use Assert.areEqual('Test Account', retrievedAcc.Name)
        System.assert(retrievedAcc.Name == 'Test Account');
        System.assert('Test Account'.equals(retrievedAcc.Name));
    }
    
    @IsTest
    static void testContactValidation() {
        // Triggers sf:RefactorAssert - should use Assert.isNotNull
        Contact con = new Contact(FirstName = 'Test', LastName = 'Contact');
        insert con;
        
        Contact retrievedCon = [SELECT Id, FirstName, LastName FROM Contact WHERE Id = :con.Id];
        
        // Should use Assert.isNotNull(retrievedCon.Id)
        System.assert(retrievedCon.Id != null);
        System.assert(retrievedCon.FirstName != null);
        System.assert(retrievedCon.LastName != null);
    }
    
    @IsTest
    static void testListOperations() {
        // Triggers sf:RefactorAssert - should use Assert methods
        List<Account> accounts = new List<Account>();
        accounts.add(new Account(Name = 'Account 1'));
        accounts.add(new Account(Name = 'Account 2'));
        
        // Should use Assert.areEqual(2, accounts.size())
        System.assert(accounts.size() == 2);
        
        // Should use Assert.isFalse(accounts.isEmpty())
        System.assert(!accounts.isEmpty());
        
        // Should use Assert.isTrue(accounts.contains(...))
        System.assert(accounts[0].Name == 'Account 1');
    }
    
    @IsTest
    static void testStringComparisons() {
        // Triggers sf:RefactorAssert - should use Assert.areEqual for string comparisons
        String expected = 'Expected Value';
        String actual = getTestValue();
        
        // Should use Assert.areEqual(expected, actual)
        System.assert(expected == actual);
        System.assert(expected.equals(actual));
        
        // Should use Assert.areNotEqual
        String different = 'Different Value';
        System.assert(!expected.equals(different));
        System.assert(expected != different);
    }
    
    @IsTest
    static void testBooleanAssertions() {
        // Triggers sf:RefactorAssert - should use Assert.isTrue/Assert.isFalse
        Boolean validationResult = performValidation();
        Boolean processResult = processData();
        
        // Should use Assert.isTrue(validationResult)
        System.assert(validationResult);
        System.assert(validationResult == true);
        
        // Should use Assert.isFalse(processResult)
        System.assert(!processResult);
        System.assert(processResult == false);
    }
    
    @IsTest
    static void testNumericComparisons() {
        // Triggers sf:RefactorAssert - should use Assert methods for numeric comparisons
        Integer expectedCount = 5;
        Integer actualCount = getRecordCount();
        
        // Should use Assert.areEqual(expectedCount, actualCount)
        System.assert(expectedCount == actualCount);
        
        Decimal expectedAmount = 100.50;
        Decimal actualAmount = calculateAmount();
        
        // Should use Assert.areEqual(expectedAmount, actualAmount)
        System.assert(expectedAmount == actualAmount);
        System.assert(actualAmount.equals(expectedAmount));
    }
    
    @IsTest
    static void testMyCase() {
        boolean myVar = true;
        System.assert(myVar, 'myVar is true'); // Should use Assert instead
    }
    
    private static String getTestValue() {
        return 'Expected Value';
    }
    
    private static Boolean performValidation() {
        return true;
    }
    
    private static Boolean processData() {
        return false;
    }
    
    private static Integer getRecordCount() {
        return 5;
    }
    
    private static Decimal calculateAmount() {
        return 100.50;
    }
}