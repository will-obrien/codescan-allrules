public class ArrayIsStoredDirectlyTrigger {
    // This class is generated to trigger the rule: sf:ArrayIsStoredDirectly
    // Rule: Array is Stored Directly
    private String[] x;
    public void foo(String[] param) {
        this.x = param; // Bad: don't do this, make a copy of the array at least
    }

    public void triggerRule() {
        System.debug('This class triggers: sf:ArrayIsStoredDirectly');
    }
}