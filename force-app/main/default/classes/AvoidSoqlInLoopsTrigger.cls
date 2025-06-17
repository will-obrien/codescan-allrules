public class AvoidSoqlInLoopsTrigger {
    public void badMethod() {
        for (Integer i = 0; i < 10; i++) {
            List<Account> accounts = [SELECT Id FROM Account LIMIT 1]; // Triggers rule
        }
    }
}