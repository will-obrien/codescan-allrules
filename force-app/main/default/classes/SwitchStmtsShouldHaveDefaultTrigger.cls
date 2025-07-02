public class SwitchStmtsShouldHaveDefaultTrigger {
    // This class is generated to trigger the rule: sf:SwitchStmtsShouldHaveDefault
    // Rule: Switch Statements Should Have a When Else Case
    public void triggerRule() {
        System.debug('This class triggers: sf:SwitchStmtsShouldHaveDefault');
    }

    public void bar() {
        Integer x = 2;
        switch on x {
            when 1 { 
                Integer j = 6;
            }
            when 2 { 
                Integer j = 8;
            }
            //Bad: Missing a default.
        }
    }
}