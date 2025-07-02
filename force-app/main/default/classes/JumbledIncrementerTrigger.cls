public class JumbledIncrementerTrigger {
    // This class is generated to trigger the rule: sf:JumbledIncrementer
    // Rule: Jumbled Incrementer
    public void triggerRule() {
        System.debug('This class triggers: sf:JumbledIncrementer');
    }

    public void foo() {
        for (Integer i = 0; i < 10; i++) {
            for (Integer k = 0; k < 20; i++) { //Bad: references both 'i' and 'k'
                System.debug('Hello');
            }
        }
    }
}