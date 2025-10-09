@isTest
public class FailedUnitTestsTrigger {
    // This class is generated to trigger the rule: common-sf:FailedUnitTests
    // Rule: Failed unit tests should be fixed
    @isTest
    static void testFailure() {
        System.assertEquals(1, 2, 'This test should fail');
    }
}