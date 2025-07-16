public class AvoidSOQLInControllerGetterTrigger {
    // This class is generated to trigger the rule: sf:AvoidSOQLInControllerGetter
    // Rule: Avoid SOQL in Controller Getter Methods
   

    private List<Account> accountLines;
    
    public List<Account> lines {
        get {
            if (accountLines == null) {
                accountLines = [SELECT Id FROM Account];
            }
            return accountLines;
        }
        private set;
    }

    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidSOQLInControllerGetter');
    }
}