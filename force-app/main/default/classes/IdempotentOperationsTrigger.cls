public class IdempotentOperationsTrigger {
    // This class is generated to trigger the rule: sf:IdempotentOperations
    // Rule: Assignment Has No Effect
    public void triggerRule() {
        System.debug('This class triggers: sf:IdempotentOperations');
    }

    public void bar() {
        Integer x = 2;
        x = x; //Bad: Avoid this.
    }
}