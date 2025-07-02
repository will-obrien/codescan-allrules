public class UnescapedOutputTrigger {
    // This class is generated to trigger the rule: sf:UnescapedOutput
    // Rule: Unescaped Error Message XSS
    public void triggerRule() {
        System.debug('This class triggers: sf:UnescapedOutput');
    }

    public void triggerHandler(){
        Trigger.new[0].addError('<b>html</b>', false); //Bad: html could contain an XSS vulnerability.
    }
}