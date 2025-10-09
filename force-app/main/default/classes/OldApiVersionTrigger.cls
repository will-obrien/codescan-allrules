public class OldApiVersionTrigger {
    // This class is generated to trigger the rule: sf:OldApiVersion
    // Rule: API Version is too old
    public void triggerRule() {
        System.debug('This class triggers: sf:OldApiVersion');
    }

    public void oldApiMethod() {
        System.debug('This class should have an old API version in its meta.xml');
    }
}