public class TooManyFieldsTrigger {
    // This class is generated to trigger the rule: sf:TooManyFields
    // Rule: Too Many Fields
    Integer birthYear;
    Integer birthMonth;
    Integer birthDate;
    float height;
    float weight;
    //Bad: Too many separate fields.

    public void triggerRule() {
        System.debug('This class triggers: sf:TooManyFields');
    }
}