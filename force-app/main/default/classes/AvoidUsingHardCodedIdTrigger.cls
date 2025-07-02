public class AvoidUsingHardCodedIdTrigger {
    // This class is generated to trigger the rule: sf:AvoidUsingHardCodedId
    // Rule: Avoid Using Hard Coded Salesforce Id
    private String RecordTypeId = '906F00000008msrIAA'; // Bad: Salesforce Id should not be hard-coded.

    public String getId() {
        return RecordTypeId;
    }

    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidUsingHardCodedId');
    }
}