public class EmptyStatementBlockTrigger {
    // This class is generated to trigger the rule: sf:EmptyStatementBlock
    // Rule: Avoid Empty Statement Blocks
    public void triggerRule() {
        System.debug('This class triggers: sf:EmptyStatementBlock');
    }

    private Integer _bar;
    public void setBar(Integer bar) {
        { _bar = bar; } //This is ok.
        {} //Bad: This should be removed.
    }
}