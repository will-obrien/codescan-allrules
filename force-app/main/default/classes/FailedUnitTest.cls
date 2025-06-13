/**
 * This class demonstrates violation of sf:FailedUnitTest rule
 * This rule tracks failing unit tests and reports them as violations.
 */
@isTest
public class FailedUnitTest {
    
    @isTest
    static void testAccountCreation() {
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        // BAD: This assertion will fail intentionally
        System.assertEquals('Wrong Name', acc.Name);
    }
    
    @isTest
    static void testContactValidation() {
        Contact con = new Contact(LastName = 'Test Contact');
        insert con;
        
        // BAD: This assertion will fail
        System.assert(con.Id == null, 'Contact should not have an ID');
    }
    
    @isTest
    static void testStringComparison() {
        String expected = 'Hello World';
        String actual = 'Hello Universe';
        
        // BAD: This will fail
        System.assertEquals(expected, actual, 'Strings should match');
    }
    
    @isTest
    static void testListSize() {
        List<String> testList = new List<String>{'one', 'two', 'three'};
        
        // BAD: This assertion will fail
        System.assertEquals(5, testList.size(), 'List should have 5 elements');
    }
    
    @isTest
    static void testNullReference() {
        String nullString = null;
        
        // BAD: This will cause a null pointer exception and fail the test
        Integer length = nullString.length();
        System.assertEquals(0, length);
    }
    
    @isTest
    static void testDivisionByZero() {
        Integer numerator = 10;
        Integer denominator = 0;
        
        // BAD: This will cause an exception and fail the test
        Integer result = numerator / denominator;
        System.assertEquals(0, result);
    }
} 