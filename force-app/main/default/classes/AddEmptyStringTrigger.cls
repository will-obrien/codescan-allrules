public class AddEmptyStringTrigger {
    // This class is generated to trigger the rule: sf:AddEmptyString
    // Rule: Add Empty String
    public void triggerRule() {
        System.debug('This class triggers: sf:AddEmptyString');
    }

    public String convert(Integer x) {
        String s = '' + x; // Bad: this is inefficient
        return s;
    }
}