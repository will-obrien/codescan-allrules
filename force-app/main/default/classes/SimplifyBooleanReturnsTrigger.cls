public class SimplifyBooleanReturnsTrigger {
    // This class is generated to trigger the rule: sf:SimplifyBooleanReturns
    // Rule: Simplify Boolean Returns
    public void triggerRule() {
        System.debug('This class triggers: sf:SimplifyBooleanReturns');
    }

    public boolean isBarEqualTo(Integer x) {
        Integer bar = 1;
        if (bar == x) { //Bad: This bit of code...
            return true;
        } else {
            return false;
        }
    }
}