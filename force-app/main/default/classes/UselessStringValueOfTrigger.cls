public class UselessStringValueOfTrigger {
    // This class is generated to trigger the rule: sf:UselessStringValueOf
    // Rule: Useless String Value Of
    public void triggerRule() {
        System.debug('This class triggers: sf:UselessStringValueOf');
    }

    public String convert(Integer i) {
        String s;
        s = 'a' + String.valueOf(i); //Bad: String.valueOf() is not required.
        return s;
    }
}