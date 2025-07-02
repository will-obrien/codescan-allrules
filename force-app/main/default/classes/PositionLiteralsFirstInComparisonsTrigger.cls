public class PositionLiteralsFirstInComparisonsTrigger {
    // This class is generated to trigger the rule: sf:PositionLiteralsFirstInComparisons
    // Rule: Position Literals First in Comparisons
    public void triggerRule() {
        System.debug('This class triggers: sf:PositionLiteralsFirstInComparisons');
    }

    public boolean bar(String x) {
        return x.equals('2'); //Bad: this can result in a null pointer
    }
}