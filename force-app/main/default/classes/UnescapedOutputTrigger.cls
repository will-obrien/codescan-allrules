public class UnescapedOutputTrigger {
    // This class is generated to trigger the rule: sf:UnescapedOutput
    // Rule: Unescaped Error Message XSS
    public void triggerRule() {
        System.debug('This class triggers: sf:UnescapedOutput');
    }

    public void triggerHandler(String html){
        Trigger.new[0].addError(html, false); //Bad: html could contain an XSS vulnerability.
    }
}