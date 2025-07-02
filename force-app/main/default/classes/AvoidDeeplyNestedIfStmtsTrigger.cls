public class AvoidDeeplyNestedIfStmtsTrigger {
    // This class is generated to trigger the rule: sf:AvoidDeeplyNestedIfStmts
    // Rule: Avoid Deeply Nested If Statements
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidDeeplyNestedIfStmts');
    }

    public void bar(Integer x, Integer y, Integer z) {
        if (x > y) {
            if (y > z) {
                if (z == x) {
                    System.debug('Too deep!');
                }
            }
        }
    }
}