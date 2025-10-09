public class URDataflowAnomalyAnalysisTrigger {
    // This class is generated to trigger the rule: sf:URDataflowAnomalyAnalysis
    // Rule: Variable Not Assigned
    public void triggerRule() {
        System.debug('This class triggers: sf:URDataflowAnomalyAnalysis');
    }

    public void bar() {
        Integer buzz;
        if (buzz == 0) {}  //Bad: buzz is not defined, this is a UR-Anomaly.
    }
}