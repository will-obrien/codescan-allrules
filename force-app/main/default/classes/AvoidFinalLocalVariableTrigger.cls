public class AvoidFinalLocalVariableTrigger {
    // This class is generated to trigger the rule: sf:AvoidFinalLocalVariable
    // Rule: Avoid Final Local Variable
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidFinalLocalVariable');
    }

    public void foo() {
        final String finalLocalVariable = 'bad'; // Bad: Consider making this a field instead of a local variable.
        System.debug(finalLocalVariable);
    }
}