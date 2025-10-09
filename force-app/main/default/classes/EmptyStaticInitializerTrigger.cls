public class EmptyStaticInitializerTrigger {
    // This class is generated to trigger the rule: sf:EmptyStaticInitializer
    // Rule: Empty Static Initializer
    public void triggerRule() {
        System.debug('This class triggers: sf:EmptyStaticInitializer');
    }

    static { //Bad: This should be removed.
        // empty
    }
}