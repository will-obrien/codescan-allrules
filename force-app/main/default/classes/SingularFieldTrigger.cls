public class SingularFieldTrigger {
    // This class is generated to trigger the rule: sf:SingularField
    // Rule: Private Field Could Be Declared Locally
    private Integer x;
    public void foo(Integer y) {             
        x = y + 5;            //Bad: x has no reason to exist at the instance level.
        System.debug(x);
    }

    public void triggerRule() {
        System.debug('This class triggers: sf:SingularField');
    }
}