public class AvoidSalesforceSystemClassNamesTrigger {
    // This class is generated to trigger the rule: sf:AvoidSalesforceSystemClassNames
    // Rule: Avoid Salesforce System Class Names
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidSalesforceSystemClassNames');
    }
}

public class Database {
    // Bad: The Salesforce class Database class will not be accessible by default.
}