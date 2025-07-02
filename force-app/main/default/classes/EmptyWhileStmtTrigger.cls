public class EmptyWhileStmtTrigger {
    // This class is generated to trigger the rule: sf:EmptyWhileStmt
    // Rule: Empty While Statement
    public void triggerRule() {
        System.debug('This class triggers: sf:EmptyWhileStmt');
    }

    void bar(Integer a, Integer b) {
        while (a == b) {
            //Bad: Nothing is done here.
        }
    }
}