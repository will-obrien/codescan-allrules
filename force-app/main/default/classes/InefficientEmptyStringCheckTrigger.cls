public class InefficientEmptyStringCheckTrigger {
    // This class is generated to trigger the rule: sf:InefficientEmptyStringCheck
    // Rule: Inefficient Empty String Check
    public void triggerRule() {
        System.debug('This class triggers: sf:InefficientEmptyStringCheck');
    }

    public void bar(String string) {
        if (string != null && string.trim().length() > 0) { //Bad: This is not recommended.
            System.debug('Do something');
        }
    }
}