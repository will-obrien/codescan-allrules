public class CatchBlockShouldDoMoreThanRethrowTrigger {
    // This class is generated to trigger the rule: sf:CatchBlockShouldDoMoreThanRethrow
    // Rule: Catch Block Should Do More Than Rethrow
    public void triggerRule() {
        System.debug('This class triggers: sf:CatchBlockShouldDoMoreThanRethrow');
    }

    public void doSomething() {
        try {
            // do stuff
        } catch (Exception e) {
            throw e;   //Bad: This serves no purpose.
        }
    }
}