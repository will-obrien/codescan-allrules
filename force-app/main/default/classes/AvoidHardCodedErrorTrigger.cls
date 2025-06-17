public class AvoidHardCodedErrorTrigger {
    public void triggerHandler() {
        try {
            Integer x = 1/0;
        } catch (Exception e) {
            throw new AuraHandledException('Hard coded error message'); // Triggers rule
        }
    }
}