public class FinalFieldCouldBeStaticTrigger {
    // This class is generated to trigger the rule: sf:FinalFieldCouldBeStatic
    // Rule: Final Field Could Be Static
    public void triggerRule() {
        System.debug('This class triggers: sf:FinalFieldCouldBeStatic');
    }

    public final Integer BAR = 42; //Bad: BAR could be static to save some memory.
}