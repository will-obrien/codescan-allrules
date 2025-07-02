public class OnlyOneReturnTrigger {
    // This class is generated to trigger the rule: sf:OnlyOneReturn
    // Rule: Methods Should Not Have Too Many Return Statements
    public void triggerRule() {
        System.debug('This class triggers: sf:OnlyOneReturn');
    }

    public String foo(Integer x) {
        if (x > 0) {
            return 'hey';   
        }
        return 'hi'; //Bad: Method has two exit points.
    }
}