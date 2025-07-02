public class AvoidRethrowingExceptionTrigger {
    // This class is generated to trigger the rule: sf:AvoidRethrowingException
    // Rule: Avoid Re-Throwing Exception
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidRethrowingException');
    }

    public void bar() {
        try {
            // do something
        } catch (SomeException se) {
            throw se; // Bad: this is not recommended.
        }
    }
}