public class AvoidReversedOperatorsTrigger {
    // This class is generated to trigger the rule: sf:AvoidReversedOperators
    // Rule: Avoid Reversed Operators
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidReversedOperators');
    }

    public void badOperators(Integer num) {
        Integer target = 7;
        target =- num; // Bad: Target is now -num, not 7 - num. Was this expected?
        target =+ num; // Bad: Target would be num, not 7 + num.
    }
}