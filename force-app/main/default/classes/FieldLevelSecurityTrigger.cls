public class FieldLevelSecurityTrigger {
    // This class is generated to trigger the rule: sf:FieldLevelSecurity
    // Rule: Field Level Security Vulnerabilities
    public void triggerRule() {
        System.debug('This class triggers: sf:FieldLevelSecurity');
    }

    public void justGiveMeFoo() {
        AggregateResult[] test = [SELECT Id FROM Opportunity];  //Bad: The resource is accessed without checking permissions.
    }
}