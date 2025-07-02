public class AvoidNestedSwitchStmtsTrigger {
    // This class is generated to trigger the rule: sf:AvoidNestedSwitchStmts
    // Rule: Avoid Nested Switch Statements
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidNestedSwitchStmts');
    }

    public void bar(Integer x, Integer y) {
        switch on x {
            when 0 {}
            when 1 {
                switch on y { // Bad: Nested switch statements are confusing.
                    when 0 {}
                }
            }
        }
    }
}