public class UnconditionalIfStatementTrigger {
    // This class is generated to trigger the rule: sf:UnconditionalIfStatement
    // Rule: Unconditional If Statement
    public void triggerRule() {
        System.debug('This class triggers: sf:UnconditionalIfStatement');
    }

    public void close() {
        if (true) {    //Bad: There is no reason for a permanently true 'if' statement, this should be removed. 
            // ...
        }
    }
}