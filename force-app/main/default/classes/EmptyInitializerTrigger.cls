public class EmptyInitializerTrigger {
    // This class is generated to trigger the rule: sf:EmptyInitializer
    // Rule: Empty Initializer
    public void triggerRule() {
        System.debug('This class triggers: sf:EmptyInitializer');
    }

    static {} //Bad: This serves no purpose...
    {}       //and neither does this.
}