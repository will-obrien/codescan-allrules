public class EmptyFinallyBlockTrigger {
    // This class is generated to trigger the rule: sf:EmptyFinallyBlock
    // Rule: Empty Finally Block
    public void triggerRule() {
        System.debug('This class triggers: sf:EmptyFinallyBlock');
    }

    public void bar() {
        try {
            Integer x=2;
        } finally {
            //Bad: Nothing is done here.
        }
    }
}