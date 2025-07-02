public class UnreachableCodeTrigger {
    // This class is generated to trigger the rule: sf:UnreachableCode
    // Rule: Unreachable Code
    public void triggerRule() {
        System.debug('This class triggers: sf:UnreachableCode');
    }

    public void foo() {
        if (false) {
            Integer x = 1; //Bad: This line will never execute.
        }
    }

    public void bar() {
        while (true) {
            break;
            Integer x = 1; //Bad: This line after 'break' will never be executed.
        }
    }
}