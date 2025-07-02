@isTest
public class FailedUnitTestTrigger {
    // This class is generated to trigger the rule: sf:FailedUnitTest
    // Rule: Failing Unit Tests
    @isTest
    static void testFailure() {
        System.assertEquals(1, 2, 'This test should fail');
    }
}