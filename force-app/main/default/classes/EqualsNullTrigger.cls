public class EqualsNullTrigger {
    // This class is generated to trigger the rule: sf:EqualsNull
    // Rule: Equals Null
    public void triggerRule() {
        System.debug('This class triggers: sf:EqualsNull');
    }

    public void foo() {
        String x = 'foo';
        if (x.equals(null)) { //Bad: Not recommended.
            System.debug('Do something');
        }
    }
}