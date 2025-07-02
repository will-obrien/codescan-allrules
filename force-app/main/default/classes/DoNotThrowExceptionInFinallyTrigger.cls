public class DoNotThrowExceptionInFinallyTrigger {
    // This class is generated to trigger the rule: sf:DoNotThrowExceptionInFinally
    // Rule: Do Not Throw Exception in Finally
    public void triggerRule() {
        System.debug('This class triggers: sf:DoNotThrowExceptionInFinally');
    }

    public void bar() {
        try {
            // Here do some stuff
        } catch( Exception e) {
            // Handling the issue
        } finally {
            throw new Exception(); //Bad: this is not recommended.
        }
    }
}