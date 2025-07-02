public class ReturnEmptyArrayRatherThanNullTrigger {
    // This class is generated to trigger the rule: sf:ReturnEmptyArrayRatherThanNull
    // Rule: Return Empty Array, Not Null
    public void triggerRule() {
        System.debug('This class triggers: sf:ReturnEmptyArrayRatherThanNull');
    }

    public Integer[] badBehavior() { //Bad: Not recommended.
        return null;
    }
}