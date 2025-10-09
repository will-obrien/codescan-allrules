public class AddEmptyStringTrigger {
    // This class is generated to trigger the rule: sf:AddEmptyString
    // Rule: Add Empty String
    public void triggerRule() {
        System.debug('This class triggers: sf:AddEmptyString');
    }

    public String convert() {
        String s = '' + 123; // Bad: this is inefficient
        return s;
    }
}