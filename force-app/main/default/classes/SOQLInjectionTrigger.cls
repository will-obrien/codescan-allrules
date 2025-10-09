public class SOQLInjectionTrigger {
    // This class is generated to trigger the rule: sf:SOQLInjection
    // Rule: Avoid Untrusted/Unescaped Variables in DML Query
    public void triggerRule() {
        System.debug('This class triggers: sf:SOQLInjection');
    }

    public void test1(String userInput) {
        String field1 = userInput; // untrusted
        String field2 = 'SELECT Id FROM Account WHERE ';
        Database.query(field2 + field1); //Bad: getFilter function may return unescaped data (potentially from user input).
    }
}