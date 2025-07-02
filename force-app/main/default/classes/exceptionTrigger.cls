public class exceptionTrigger {
    // This class is generated to trigger the rule: sf:exception
    // Rule: Tracks CodeScan Parser Problems
    public void triggerRule() {
        System.debug('This class triggers: sf:exception');
    }

    // This class is intentionally malformed to cause a parser exception
    public void foo() {
        Integer x = ; // Syntax error: missing value
    }
}