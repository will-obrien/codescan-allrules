public class UnnecessaryParenthesesTrigger {
    // This class is generated to trigger the rule: sf:UnnecessaryParentheses
    // Rule: Unnecessary Parentheses
    public void triggerRule() {
        System.debug('This class triggers: sf:UnnecessaryParentheses');
    }

    boolean bar() {
        return (true);
    }
}