public class UnnecessaryCaseChangeTrigger {
    // This class is generated to trigger the rule: sf:UnnecessaryCaseChange
    // Rule: Unnecessary Case Change
    public void triggerRule() {
        System.debug('This class triggers: sf:UnnecessaryCaseChange');
    }

    public void foo(String buz) {
        boolean answer1 = buz.toUpperCase().equals('BAZ'); //Bad: should be buz.equalsIgnoreCase('baz').
    }
}