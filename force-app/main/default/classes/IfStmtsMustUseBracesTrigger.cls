public class IfStmtsMustUseBracesTrigger {
    // This class is generated to trigger the rule: sf:IfStmtsMustUseBraces
    // Rule: If Statements Must Use Braces
    public void triggerRule() {
        System.debug('This class triggers: sf:IfStmtsMustUseBraces');
    }

    public void foo(boolean bar) {
        if (bar)
            System.debug('bar is true');
    }
}