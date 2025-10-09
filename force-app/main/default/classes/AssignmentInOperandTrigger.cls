public class AssignmentInOperandTrigger {
    // This class is generated to trigger the rule: sf:AssignmentInOperand
    // Rule: Avoid Assignments in Operands
    public void triggerRule() {
        System.debug('This class triggers: sf:AssignmentInOperand');
    }

    public void badAssignment() {
        Integer x = 2;
        if ((x = getX()) == 3) { // Bad: assignment in an if conditional is not recommended.
            System.debug('3!');
        }
    }

    public Integer getX() { return 3; }
}