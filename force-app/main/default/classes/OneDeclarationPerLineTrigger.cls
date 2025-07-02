public class OneDeclarationPerLineTrigger {
    // This class is generated to trigger the rule: sf:OneDeclarationPerLine
    // Rule: One Declaration Per Line
    public void triggerRule() {
        System.debug('This class triggers: sf:OneDeclarationPerLine');
    }

    String name, lastname; //Bad: combined declarations are not recommended.
}