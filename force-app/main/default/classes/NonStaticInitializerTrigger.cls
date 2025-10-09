public class NonStaticInitializerTrigger {
    // This class is generated to trigger the rule: sf:NonStaticInitializer
    // Rule: Non Static Initializer
    public void triggerRule() {
        System.debug('This class triggers: sf:NonStaticInitializer');
    }

    {
        System.debug('I am about to construct myself'); //Bad: This block gets run before any call to a constructor
    }
}