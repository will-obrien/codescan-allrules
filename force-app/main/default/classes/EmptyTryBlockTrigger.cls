public class EmptyTryBlockTrigger {
    // This class is generated to trigger the rule: sf:EmptyTryBlock
    // Rule: Empty Try Block
    public void triggerRule() {
        System.debug('This class triggers: sf:EmptyTryBlock');
    }

    public void bar() {
        try { //Bad: Nothing is done here.
        } catch (Exception e) {
            System.debug(e.getMessage());
        }
    }
}