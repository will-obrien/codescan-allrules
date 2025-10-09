public final class AvoidProtectedFieldInFinalClassTrigger {
    // This class is generated to trigger the rule: sf:AvoidProtectedFieldInFinalClass
    // Rule: Avoid Protected Field in Final Class
    private Integer x;
    protected Integer y;  // Bad: Bar cannot be subclassed, y should be made either private or package visible.
    public AvoidProtectedFieldInFinalClassTrigger() {}

    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidProtectedFieldInFinalClass');
    }
}