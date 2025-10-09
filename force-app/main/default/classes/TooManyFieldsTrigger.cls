public class TooManyFieldsTrigger {
    // This class is generated to trigger the rule: sf:TooManyFields
    // Rule: Too Many Fields
    Integer birthYear;
    Integer birthMonth;
    Integer birthDate;
    float height;
    float weight;
    Integer one;
    Integer two;
    Integer three;
    Integer four;
    Integer five;
    Integer six;
    Integer seven;
    Integer eight;
    Integer nine;
    Integer ten;
    Integer eleven;
    Integer twelve;
    Integer thirteen;
    Integer fourteen;
    Integer fifteen;
    Integer sixteen;
    Integer seventeen;
    //Bad: Too many separate fields.

    public void triggerRule() {
        System.debug('This class triggers: sf:TooManyFields');
    }
}