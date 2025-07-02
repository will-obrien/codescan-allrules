public class AvoidSoqlWithNullInWhereTrigger {
    // This class is generated to trigger the rule: sf:AvoidSoqlWithNullInWhere
    // Rule: Avoid using null conditions in SOQL WHERE clause.
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidSoqlWithNullInWhere');
    }

    public void badNullWhere() {
        Contact[] lst = [SELECT Id, Name FROM Contact WHERE CustomField__c = null]; // Bad: this is not recommended.
        System.debug(lst);
    }
}