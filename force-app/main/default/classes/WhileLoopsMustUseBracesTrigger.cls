public class WhileLoopsMustUseBracesTrigger {
    // This class is generated to trigger the rule: sf:WhileLoopsMustUseBraces
    // Rule: While Loops Must Use Braces
    public void triggerRule() {
        System.debug('This class triggers: sf:WhileLoopsMustUseBraces');
    }

    public void foo() {
        while (true)
            System.debug('No braces');
    }
}