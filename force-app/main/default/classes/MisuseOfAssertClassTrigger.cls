@IsTest
public class MisuseOfAssertClassTrigger {
    // This class triggers the rule: sf:MisuseOfAssertClass by misusing System.Assert methods
    
    @IsTest
    static void testMisuseOfAssert() {
        // Triggers sf:MisuseOfAssertClass - using assert without meaningful checks
        
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        // Misuse: Using assert on constants or obvious truths
        System.assert(true); // Always true, meaningless assertion
        System.assert(1 == 1); // Always true, meaningless assertion
        System.assert('test' == 'test'); // Always true, meaningless assertion
        
        // Misuse: Using assert without any validation logic
        System.assert(acc != null); // Object just created, will never be null
        
        // Misuse: Using assert on literals
        System.assert('literal string' != null); // String literal is never null
        System.assert(42 > 0); // Number literal comparison, meaningless
        
        // Misuse: Redundant assertions
        System.assertNotEquals(null, acc);
        System.assert(acc != null); // Redundant with previous assertion
    }
    
    @IsTest
    static void testMoreAssertMisuse() {
        // Triggers sf:MisuseOfAssertClass - more misuse patterns
        
        List<Account> accounts = new List<Account>();
        
        // Misuse: Assert on empty collections
        System.assert(accounts != null); // List is never null when initialized
        System.assert(accounts.isEmpty()); // Obviously true for new list
        
        accounts.add(new Account(Name = 'Test 1'));
        accounts.add(new Account(Name = 'Test 2'));
        
        // Misuse: Assert on obvious collection properties
        System.assert(accounts.size() >= 0); // Size is always >= 0
        System.assert(!accounts.isEmpty()); // Obviously true after adding items
        
        // Misuse: Assert on type checks that are guaranteed
        Object obj = 'String value';
        System.assert(obj instanceof String); // Always true for string literal
        
        // Misuse: Assert on mathematical impossibilities
        Integer value = 10;
        System.assert(value == value); // Always true, meaningless
        System.assert(value >= value); // Always true, meaningless
    }
    
    @IsTest
    static void testAssertWithoutMessage() {
        // Triggers sf:MisuseOfAssertClass - assertions without descriptive messages
        
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        // Misuse: Important assertions without failure messages
        System.assertNotEquals(null, acc.Id); // Should have message explaining what failed
        
        Contact con = new Contact(FirstName = 'Test', LastName = 'Contact');
        insert con;
        
        // Misuse: Complex assertions without explanatory messages
        System.assert(acc.Id != con.Id); // Should explain why IDs should be different
        
        List<Account> foundAccounts = [SELECT Id FROM Account WHERE Name = 'Test Account'];
        System.assertEquals(1, foundAccounts.size()); // Should explain expected vs actual
    }
    
    @IsTest
    static void testInconsistentAssertUsage() {
        // Triggers sf:MisuseOfAssertClass - inconsistent assertion usage
        
        String testValue = 'Expected Value';
        String actualValue = 'Expected Value';
        
        // Misuse: Using wrong assertion method for comparison
        System.assert(testValue == actualValue); // Should use assertEquals
        
        Boolean isValid = true;
        System.assertEquals(true, isValid); // Should use assert for boolean true
        
        // Misuse: Unnecessary complex assertions
        List<String> items = new List<String>{'item1', 'item2'};
        System.assert(items.contains('item1') == true); // Overly complex
        
        // Misuse: Assert on method calls that always succeed
        System.assert(Math.abs(-5) == 5); // Math function always works as expected
    }
    
    @IsTest
    static void testRedundantAssertions() {
        // Triggers sf:MisuseOfAssertClass - redundant and duplicate assertions
        
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        // Misuse: Multiple redundant assertions on same condition
        System.assertNotEquals(null, acc);
        System.assert(acc != null); // Redundant
        System.assertNotEquals(null, acc.Id);
        System.assert(acc.Id != null); // Redundant
        
        // Misuse: Over-asserting obvious conditions
        System.assert(acc.Name == 'Test Account');
        System.assertEquals('Test Account', acc.Name); // Redundant
        System.assertNotEquals('Different Name', acc.Name); // Redundant negative check
    }
}