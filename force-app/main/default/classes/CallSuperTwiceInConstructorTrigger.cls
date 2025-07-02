public class Bar {
    public Bar(String val) {}
}

public class CallSuperTwiceInConstructorTrigger extends Bar {
    public CallSuperTwiceInConstructorTrigger(boolean p) {
        if (p)
            super('true value');
        else
            super('false value'); //Bad: This can be confusing.
    }

    // This class is generated to trigger the rule: sf:CallSuperTwiceInConstructor
    // Rule: Avoid Calling Super Twice in a Constructor
    public void triggerRule() {
        System.debug('This class triggers: sf:CallSuperTwiceInConstructor');
    }
}