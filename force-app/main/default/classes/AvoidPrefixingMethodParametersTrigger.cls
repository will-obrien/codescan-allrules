public class AvoidPrefixingMethodParametersTrigger {
    // This class is generated to trigger the rule: sf:AvoidPrefixingMethodParameters
    // Rule: Avoid Prefixing Method Parameters
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidPrefixingMethodParameters');
    }

    public void bar(Integer inLeftOperand, Integer outRightOperand) {
        Integer result = inLeftOperand + outRightOperand;
        System.debug(result);
    }
}