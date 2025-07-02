public class AvoidFieldNameMatchingTypeNameTrigger {
    // This class is generated to trigger the rule: sf:AvoidFieldNameMatchingTypeName
    // Rule: Avoid Field Name Matching Type Name
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidFieldNameMatchingTypeName');
    }

    Integer AvoidFieldNameMatchingTypeName; // Bad: there is probably a better name that can be used
}