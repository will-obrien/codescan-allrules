public class UnnecessaryLocalBeforeReturnTrigger {
    // This class is generated to trigger the rule: sf:UnnecessaryLocalBeforeReturn
    // Rule: Unnecessary Local Before Return
    public void triggerRule() {
        System.debug('This class triggers: sf:UnnecessaryLocalBeforeReturn');
    }

    public Integer foo() {
        Integer x = doSomething();
        return x; //Bad: Instead, just 'return doSomething();'.
    }

    public Integer doSomething() { return 42; }
}