public class StatementsShouldBeOnSeparateLinesTrigger {
    // This class is generated to trigger the rule: sf:StatementsShouldBeOnSeparateLines
    // Rule: Statements Should Be On Separate Lines
    public void triggerRule() {
        System.debug('This class triggers: sf:StatementsShouldBeOnSeparateLines');
    }

    public void foo(Integer i){
        System.debug('statement'); i++;   //Bad: Statements should be on separate lines.
    }
}