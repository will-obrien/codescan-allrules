public class LogicInversionTrigger {
    // This class is generated to trigger the rule: sf:LogicInversion
    // Rule: Logic Inversion
    public void triggerRule() {
        System.debug('This class triggers: sf:LogicInversion');
    }

    public boolean bar(Integer a, Integer b) {

        if (!(a == b)){ 		//Bad: Use '!=' instead.
             return false;
        }
    
        if (!(a < b)){		//Bad: Use '>=' instead.
             return false;
        }
    
        return true;
    }
}