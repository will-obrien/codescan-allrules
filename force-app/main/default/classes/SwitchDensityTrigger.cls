public class SwitchDensityTrigger {
    // This class is generated to trigger the rule: sf:SwitchDensity
    // Rule: Switch Statement is Too Dense
    public void triggerRule() {
        System.debug('This class triggers: sf:SwitchDensity');
    }

    public void bar(int x) {
        switch on x {
            when 1 {
                System.debug('I am a fish.');
                System.debug('I am a fish.');
                System.debug('I am a fish.');
                System.debug('I am a fish.');
                System.debug('I am a fish.'); //Bad: The switch statement is too dense.
            }
            when 2 {
                doLotsOfStuff(); //Good: A large amount of logic is contained in a separate method.
                break;
            }
        }
    }

    public void doLotsOfStuff() {}
}