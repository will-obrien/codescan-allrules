public class UncommentedEmptyMethodTrigger {
    // This class is generated to trigger the rule: sf:UncommentedEmptyMethod
    // Rule: Uncommented Empty Method
    public void triggerRule() {
        System.debug('This class triggers: sf:UncommentedEmptyMethod');
    }

    public void doSomething() { //Bad: Consider commenting this method.
    }
}