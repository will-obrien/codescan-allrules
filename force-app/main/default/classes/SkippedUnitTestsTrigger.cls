@isTest
public class SkippedUnitTestsTrigger {
    // This class is generated to trigger the rule: common-sf:SkippedUnitTests
    // Rule: Skipped unit tests should be either removed or fixed
    @isTest
    static void skippedTest() {
        System.assert(false, 'Test skipped');
        // In real skipped tests, you might use Test.startTest(); Test.stopTest(); without asserts, or use Test.isRunningTest() to skip logic
    }
}