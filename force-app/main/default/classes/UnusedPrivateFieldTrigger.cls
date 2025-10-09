public class UnusedPrivateFieldTrigger {
    // This class is generated to trigger the rule: sf:UnusedPrivateField
    // Rule: Unused Private Field
    private static Integer FOO = 2; //Bad: this field is unused.
    private Integer i = 5; //Bad: this field is unused.
    private Integer j = 6;
    public Integer addOne() {
        return j++;
    }
    public void triggerRule() {
        System.debug('This class triggers: sf:UnusedPrivateField');
    }
}