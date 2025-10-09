public class SimplifyConditionalTrigger {
    // This class is generated to trigger the rule: sf:SimplifyConditional
    // Rule: Unnecessary Null Check with instanceOf
    public void triggerRule() {
        System.debug('This class triggers: sf:SimplifyConditional');
    }

    public void bar(Object x) {
        if (x != null && x instanceof Bar) { 	//Bad: The 'x != null' check is not needed.
            doStuff();
        }
    }
}