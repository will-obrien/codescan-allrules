public class AvoidSOQLInControllerGetterTrigger {
    // This class is generated to trigger the rule: sf:AvoidSOQLInControllerGetter
    // Rule: Avoid SOQL in Controller Getter Methods
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidSOQLInControllerGetter');
    }

    public List<Account> getLines() {
        return [SELECT Id FROM Account]; // BAD - SOQL in getter
    }
}