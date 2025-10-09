public class LocalVariableCouldBeFinalTrigger {
    // This class is generated to trigger the rule: sf:LocalVariableCouldBeFinal
    // Rule: Local Variable Could Be Final
    public void triggerRule() {
        System.debug('This class triggers: sf:LocalVariableCouldBeFinal');
    }

    public void foo () {
        String a = 'a'; //Bad: if a will not be assigned again it is better to make it final.
        System.debug(a);
    }
}