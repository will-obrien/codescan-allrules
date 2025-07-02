@IsTest //Bad: class doesn't contain any tests.
public class ClassWithoutTestCasesTrigger {
    // This class is generated to trigger the rule: sf:ClassWithoutTestCases
    // Rule: Test Methods in Non-Test Class
    public void triggerRule() {
        System.debug('This class triggers: sf:ClassWithoutTestCases');
    }

    public static void otherMethod(){
    }
}