@isTest(seeAllData=true) // Bad: this is not recommended.
public class AvoidUsingSeeAllDataTrigger {
    // This class is generated to trigger the rule: sf:AvoidUsingSeeAllData
    // Rule: Avoid Using @IsTest(SeeAllData=true)
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidUsingSeeAllData');
    }

    public static void testWithAllData() {
        System.debug('Test with seeAllData=true');
    }
}