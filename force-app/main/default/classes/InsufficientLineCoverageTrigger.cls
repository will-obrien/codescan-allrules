public class InsufficientLineCoverageTrigger {
    // This class is generated to trigger the rule: common-sf:InsufficientLineCoverage
    // Rule: Lines should have sufficient coverage by tests
    public void triggerRule() {
        System.debug('This class triggers: common-sf:InsufficientLineCoverage');
    }

    public void uncoveredMethod() {
        System.debug('This method is not covered by any test');
    }
}