public class AvoidSoqlWithNegativeLogicTrigger {
    public void badQuery() {
        List<Account> accounts = [SELECT Id FROM Account WHERE Name != 'Test']; // Triggers rule
        System.debug('Accounts: ' + accounts.size());
    }
}