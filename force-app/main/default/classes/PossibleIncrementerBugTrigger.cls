public class PossibleIncrementerBugTrigger {
    // This class is generated to trigger the rule: sf:PossibleIncrementerBug
    // Rule: Suspicious For Loop Incrementer
    public void triggerRule() {
        System.debug('This class triggers: sf:PossibleIncrementerBug');
        Integer Y = 0;
        for (integer X=0 ; X > N ; Y++ ){}
    }
}