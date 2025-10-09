public class AvoidInstanceofChecksInCatchClauseTrigger {
    // This class is generated to trigger the rule: sf:AvoidInstanceofChecksInCatchClause
    // Rule: Avoid Instanceof Checks in Catch Clause
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidInstanceofChecksInCatchClause');
    }

    public void badCatch() {
        try {
            // do something
        } catch (Exception ee) {
            if (ee instanceof IOException) {
                System.debug('Cleanup');
            }
        }
    }
}