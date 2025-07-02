public class AvoidUsingHardCodedIPTrigger {
    // This class is generated to trigger the rule: sf:AvoidUsingHardCodedIP
    // Rule: Avoid Using Hard Coded IP
    private String ip = '127.0.0.1'; // Bad: IP should not be hard coded.

    public String getIP() {
        return ip;
    }

    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidUsingHardCodedIP');
    }
}