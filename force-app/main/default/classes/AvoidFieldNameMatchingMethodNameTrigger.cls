public class AvoidFieldNameMatchingMethodNameTrigger {
    // This class is generated to trigger the rule: sf:AvoidFieldNameMatchingMethodName
    // Rule: Avoid Field Name Matching Method Name
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidFieldNameMatchingMethodName');
    }

    Object bar;
    void bar() {}
}