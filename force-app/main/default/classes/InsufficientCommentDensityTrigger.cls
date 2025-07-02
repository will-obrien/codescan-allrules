public class InsufficientCommentDensityTrigger {
    // This class is generated to trigger the rule: sf:InsufficientCommentDensity
    // Rule: Source files should have a sufficient density of comment lines
    public void triggerRule() {
        System.debug('This class triggers: sf:InsufficientCommentDensity');
    }

    public void doSomething() {
        Integer x = 1;
        Integer y = 2;
        Integer z = x + y;
        System.debug(z);
    }
    // Not enough comments in this class
}