public class UnnecessaryConversionTemporaryTrigger {
    // This class is generated to trigger the rule: sf:UnnecessaryConversionTemporary
    // Rule: Unnecessary Temporary Variable for String Conversion
    public void triggerRule() {
        System.debug('This class triggers: sf:UnnecessaryConversionTemporary');
    }

    public String convert(Integer x) {
        String foo = new Integer(x).toString(); //Bad: this wastes an object.
        return foo;
    }
}