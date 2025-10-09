public class CallSuperInConstructorTrigger extends Exception {
    // This class is generated to trigger the rule: sf:CallSuperInConstructor
    // Rule: Call Super In Constructor
    public void triggerRule() {
        System.debug('This class triggers: sf:CallSuperInConstructor');
    }

    public CallSuperInConstructorTrigger() {
        //do something... //Bad: super is not called, this is not recommended.
    }
}