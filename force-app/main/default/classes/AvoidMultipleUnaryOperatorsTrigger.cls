public class AvoidMultipleUnaryOperatorsTrigger {
    // This class is generated to trigger the rule: sf:AvoidMultipleUnaryOperators
    // Rule: Avoid Multiple Unary Operators
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidMultipleUnaryOperators');
    }

    public void badUnary() {
        Integer i = - -1;
        Integer j = + - +1;
        Integer z = ~~2;
        Boolean b = !!true;
        Boolean c = !!!true;
    }
}