public class EmptyIfStmtTrigger {
    // This class is generated to trigger the rule: sf:EmptyIfStmt
    // Rule: Empty If Statement
    public void triggerRule() {
        System.debug('This class triggers: sf:EmptyIfStmt');
    }

    public void bar(Integer x) {
        if (x == 0) {
            //Bad: Nothing is done here.
        }
    }
}