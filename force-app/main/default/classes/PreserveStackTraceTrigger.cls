public class PreserveStackTraceTrigger {
    // This class is generated to trigger the rule: sf:PreserveStackTrace
    // Rule: Preserve Stack Trace
    public void triggerRule() {
        System.debug('This class triggers: sf:PreserveStackTrace');
    }

    void bad() {
        try{
            Integer.parseInt('a');
        } catch(Exception e){
            throw new Exception(e.getMessage()); //Bad: Not recommended.
        }
    }
}