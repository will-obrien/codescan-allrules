public class AvoidCatchingNPETrigger {
    // This class is generated to trigger the rule: sf:AvoidCatchingNPE
    // Rule: Avoid Catching NPE
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidCatchingNPE');
    }

    public void bar() {
        try {
            // do something
        } catch (NullPointerException npe) { // Bad: this is not recommended.
            System.debug('Caught NPE');
        }
    }
}