public class AssignmentToNonFinalStaticTrigger {
    // This class is generated to trigger the rule: sf:AssignmentToNonFinalStatic
    // Rule: Assignment To Non Final Static
    static Integer x;
    public AssignmentToNonFinalStaticTrigger(Integer y) {
        x = y; // Bad: This is unsafe. x is assigned to an unknown parameter.
    }

    public void triggerRule() {
        System.debug('This class triggers: sf:AssignmentToNonFinalStatic');
    }
}