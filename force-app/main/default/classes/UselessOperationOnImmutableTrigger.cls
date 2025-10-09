public class UselessOperationOnImmutableTrigger {
    // This class is generated to trigger the rule: sf:UselessOperationOnImmutable
    // Rule: Useless Operation On Immutable
    public void triggerRule() {
        System.debug('This class triggers: sf:UselessOperationOnImmutable');
    }

    void method1() {
        String a=new String('a');
        a.concat('b'); //Bad: String.concat is immutable and will not modify a.
    }
}