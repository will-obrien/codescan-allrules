public class ForLoopShouldBeWhileLoopTrigger {
    // This class is generated to trigger the rule: sf:ForLoopShouldBeWhileLoop
    // Rule: For Loop Should Be While Loop
    public void triggerRule() {
        System.debug('This class triggers: sf:ForLoopShouldBeWhileLoop');
    }

    public void bar() {
        for (;true;) ; //Bad: The for loop contains no Initialiser or Update.
    }
}