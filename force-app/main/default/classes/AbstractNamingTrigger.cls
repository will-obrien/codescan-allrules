public abstract class NotAbstractNaming {
    public void foo() {}
}

public class AbstractNamingTrigger {
    // This class is generated to trigger the rule: sf:AbstractNaming
    // Rule: Abstract Naming Conventions
    public void triggerRule() {
        System.debug('This class triggers: sf:AbstractNaming');
    }
}