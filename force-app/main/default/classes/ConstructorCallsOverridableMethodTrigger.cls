public class ConstructorCallsOverridableMethodTrigger {
    // This class is generated to trigger the rule: sf:ConstructorCallsOverridableMethod
    // Rule: Constructor Calls Overridable Method
    public void triggerRule() {
        System.debug('This class triggers: sf:ConstructorCallsOverridableMethod');
    }
}

public class SeniorClass {
    public SeniorClass(){
        toString(); //Bad: toString() may throw NullPointerException if overridden.
    }
    public virtual String toString(){
        return 'IAmSeniorClass';
    }
}

public class JuniorClass extends SeniorClass {
    private String name;
    public JuniorClass(){
        super(); //Bad: Automatic call to super() leads to NullPointerException.
        name = 'JuniorClass';
    }
    public override String toString(){
        return name.toUpperCase();
    }
}