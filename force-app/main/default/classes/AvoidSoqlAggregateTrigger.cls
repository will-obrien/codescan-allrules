public class AvoidSoqlAggregateTrigger {
    // This class is generated to trigger the rule: sf:AvoidSoqlAggregate
    // Rule: Avoid Calling Aggregate Functions on Non-Grouped Query
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidSoqlAggregate');
    }

    public void badAggregate() {
        AggregateResult[] results = [SELECT Max(LastModifiedDate) FROM Account]; // Bad: This query can cause a governor limit error if there are too many Accounts.
        System.debug(results);
    }
}