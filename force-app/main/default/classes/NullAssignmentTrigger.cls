public class NullAssignmentTrigger {
    // This class is generated to trigger the rule: sf:NullAssignment
    // Rule: Null Assignment
    public void triggerRule() {
        System.debug('This class triggers: sf:NullAssignment');
    }

    public void bar() {
        Object x = null; //Good: This is OK.
        x = new Object();
        x = null; //Bad: This is not required.
    }
}