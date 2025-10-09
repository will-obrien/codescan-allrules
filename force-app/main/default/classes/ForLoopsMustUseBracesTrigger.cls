public class ForLoopsMustUseBracesTrigger {
    // This class is generated to trigger the rule: sf:ForLoopsMustUseBraces
    // Rule: For Loops Must Use Braces
    public void triggerRule() {
        System.debug('This class triggers: sf:ForLoopsMustUseBraces');
    }

    public void foo() {
        for (Integer i = 0; i < 42; i++)   //Bad: Not recommended.
            System.debug(i);
    }
}