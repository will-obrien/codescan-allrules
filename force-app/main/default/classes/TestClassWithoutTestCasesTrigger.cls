@IsTest //Bad: class doesn't contain any tests.
public class TestClassWithoutTestCasesTrigger {
    // This class is generated to trigger the rule: sf:TestClassWithoutTestCases
    // Rule: Test Class without Test Methods
    public void triggerRule() {
        System.debug('This class triggers: sf:TestClassWithoutTestCases');
    }

    public static void otherMethod(){
    }
}