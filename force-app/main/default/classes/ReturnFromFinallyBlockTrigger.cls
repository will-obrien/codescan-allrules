public class ReturnFromFinallyBlockTrigger {
    // This class is generated to trigger the rule: sf:ReturnFromFinallyBlock
    // Rule: Return from Finally Block
    public void triggerRule() {
        System.debug('This class triggers: sf:ReturnFromFinallyBlock');
    }

    public String foo() {
        try {
            // doHeapsOfStuff();
        } catch (Exception e) {
            throw e;
        } finally {
            return 'A. O. K.'; //Bad: Return is not recommended here.
        }
        // unreachable
    }
}