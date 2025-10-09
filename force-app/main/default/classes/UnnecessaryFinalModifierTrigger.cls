public final class UnnecessaryFinalModifierTrigger {
    // This class is generated to trigger the rule: sf:UnnecessaryFinalModifier
    // Rule: Unnecessary Final Modifier
    public void triggerRule() {
        System.debug('This class triggers: sf:UnnecessaryFinalModifier');
    }

    private final void foo() {
        // This final modifier is not necessary, since the class is final
        // and thus, all methods are final
    }
}