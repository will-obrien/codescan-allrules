public class EmptyStatementNotInLoopTrigger {
    // This class is generated to trigger the rule: sf:EmptyStatementNotInLoop
    // Rule: Empty Statement Not in Loop
    public void triggerRule() {
        System.debug('This class triggers: sf:EmptyStatementNotInLoop');
    }

    public void doit() {
        System.debug('look at the extra semicolon');; //Bad: This semicolon has no purpose.
    }
}