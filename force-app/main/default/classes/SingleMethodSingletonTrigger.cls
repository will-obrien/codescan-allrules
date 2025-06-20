public class SingleMethodSingletonTrigger {
    // This class triggers the rule: sf:SingleMethodSingleton by implementing a singleton with only one method
    
    private static SingleMethodSingletonTrigger instance;
    
    // Private constructor
    private SingleMethodSingletonTrigger() {
        // Private constructor for singleton pattern
    }
    
    // Triggers sf:SingleMethodSingleton - singleton with only one public method
    public static SingleMethodSingletonTrigger getInstance() {
        if (instance == null) {
            instance = new SingleMethodSingletonTrigger();
        }
        return instance;
    }
    
    // This is the only public method besides getInstance(), triggering the rule
    public void doSomething() {
        System.debug('Single method singleton executing');
    }
    
    // Note: Having only getInstance() and one other method triggers the SingleMethodSingleton rule
    // This pattern suggests the singleton might be unnecessary and could be replaced with a static method
}