public class AvoidCatchingThrowableTrigger {
    // This class is generated to trigger the rule: sf:AvoidCatchingThrowable
    // Rule: Avoid Catching Throwable
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidCatchingThrowable');
    }

    public void bar() {
        try {
            // do something
        } catch (Throwable th) { // Bad: should not catch 'Throwable'.
            System.debug('Caught Throwable');
        }
    }
}