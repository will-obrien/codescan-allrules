public class UnusedNullCheckInEqualsTrigger {
    // This class is generated to trigger the rule: sf:UnusedNullCheckInEquals
    // Rule: Unused Null Check in Equals
    public void triggerRule() {
        System.debug('This class triggers: sf:UnusedNullCheckInEquals');
    }

    public void method(String a) {
        if (a != null && method1().equals(a)) { //Bad: will trigger the rule.
            //whatever
        }
    }

    public String method1() { return 'ok'; }
}