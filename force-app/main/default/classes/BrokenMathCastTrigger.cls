public class BrokenMathCastTrigger {
    // This class is generated to trigger the rule: sf:BrokenMathCast
    // Rule: Unexpected Casting of Types
    public void triggerRule() {
        System.debug('This class triggers: sf:BrokenMathCast');
        double twoThirds = 2/3; 
    }
}