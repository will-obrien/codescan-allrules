public class LongVariableTrigger {
    // This class is generated to trigger the rule: sf:LongVariable
    // Rule: Long Variable Name
    Integer reallyLongIntName = -3; //Bad: field name is too long.
    public static void main( String argumentsList[] ) { //Bad: formal arg name is too long.
        Integer otherReallyLongName = -5; //Bad: local variable name is too long
        for (Integer interestingIntIndex = 0; interestingIntIndex < 10; interestingIntIndex ++ ) {}
    }

    public void triggerRule() {
        System.debug('This class triggers: sf:LongVariable');
    }
}