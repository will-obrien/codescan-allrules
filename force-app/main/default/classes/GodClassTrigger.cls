global class GodClassTrigger {
    // This class is generated to trigger the rule: sf:GodClass
    // Rule: God Class Rule
    void GodClassTrigger() {}
    public void doGodStuff() {
        // Accesses too many outside classes/data and is overly complex.
        OutsideClassOne.doStuff();
        OutsideClassTwo.doStuff();
        if(true) {
            OutsideClassThree.doStuff();
        } else if (OutsideClass.isdoingOtherStuff()) {
            OutsideClassFour.doStuff();
        }
        OutsideClassFive.doStuff();
        OutsideClassSix.doStuff();
        OutsideClassSeven.doStuff();
        //...and more and more lines...
    }
    public void triggerRule() {
        System.debug('This class triggers: sf:GodClass');
    }
}