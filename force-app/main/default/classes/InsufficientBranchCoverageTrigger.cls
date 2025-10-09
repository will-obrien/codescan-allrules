public class InsufficientBranchCoverageTrigger {
    // This class is generated to trigger the rule: common-sf:InsufficientBranchCoverage
    // Rule: Branches should have sufficient coverage by tests
    public Integer branchyMethod(Integer x) {
        if (x > 10) {
            return 1;
        } else if (x > 5) {
            return 2;
        } else {
            return 3;
        }
    }
    // No test class provided, so branch coverage will be insufficient
}