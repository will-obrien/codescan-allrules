public class UseObjectForClearerAPITrigger {
    // This class is generated to trigger the rule: sf:UseObjectForClearerAPI
    // Rule: Use Object for Clearer API
    public void triggerRule() {
        System.debug('This class triggers: sf:UseObjectForClearerAPI');
    }

    public void connect(String username, String pssd, String databaseName, String databaseAdress) { //Bad: Not recommended.
    }
}