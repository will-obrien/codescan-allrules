public class AvoidReassigningParametersTrigger {
    // This class is generated to trigger the rule: sf:AvoidReassigningParameters
    // Rule: Avoid Reassigning Parameters
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidReassigningParameters');
    }

    private void foo(String bar) {
        bar = 'something else'; // Bad: Not recommended.
    }
}