public class FutureMethodInLoopTrigger {
    // This class is generated to trigger the rule: sf:FutureMethodInLoop
    // Rule: Avoid Calling @Future Methods Inside Loops
    @future public static void futureMethod(){}
    public void badAction() {
        for (Integer i = 0; i < 10; i++) {
            futureMethod(); //Bad: this is not recommended.
        }
    }
    public void triggerRule() {
        System.debug('This class triggers: sf:FutureMethodInLoop');
    }
}