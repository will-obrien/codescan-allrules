public class AvoidBranchingStatementAsLastInLoopTrigger {
    // This class is generated to trigger the rule: sf:AvoidBranchingStatementAsLastInLoop
    // Rule: Avoid Branching Statement As Last In Loop
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidBranchingStatementAsLastInLoop');
    }

    public void badLoop() {
        for (Integer i = 0; i < 10; i++) {
            if (i * i <= 25) {
                continue;
            }
            break;
        }
    }
}