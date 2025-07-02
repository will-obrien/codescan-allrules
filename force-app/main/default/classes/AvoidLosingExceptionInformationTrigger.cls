public class AvoidLosingExceptionInformationTrigger {
    // This class is generated to trigger the rule: sf:AvoidLosingExceptionInformation
    // Rule: Avoid Losing Exception Information
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidLosingExceptionInformation');
    }

    public void bar() {
        try {
            // do something
        } catch (SomeException se) {
            se.getMessage();   // Bad: this is not recommended.
        }
    }
}