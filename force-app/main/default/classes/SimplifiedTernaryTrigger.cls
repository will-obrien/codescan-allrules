public class SimplifiedTernaryTrigger {
    // This class is generated to trigger the rule: sf:SimplifiedTernary
    // Rule: Ternary Operators Can Be Simplified With || or &&
    public void triggerRule() {
        System.debug('This class triggers: sf:SimplifiedTernary');
    }

    public boolean test(boolean condition) {
        return condition ? true : something(); //Can be as simple as return condition || something();
    }

    public boolean something() { return false; }
}