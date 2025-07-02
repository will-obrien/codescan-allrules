public interface AvoidConstantsInterfaceTrigger {
    Integer CONSTANT1 = 0;
    String CONSTANT2 = '1';
}

public class AvoidConstantsInterfaceTrigger {
    // This class is generated to trigger the rule: sf:AvoidConstantsInterface
    // Rule: Avoid Constants Interface
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidConstantsInterface');
    }
}