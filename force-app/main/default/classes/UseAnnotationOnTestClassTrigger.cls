public class UseAnnotationOnTestClassTrigger {
    // This class is generated to trigger the rule: sf:UseAnnotationOnTestClass
    // Rule: Use the @IsTest annotation
    public void triggerRule() {
        System.debug('This class triggers: sf:UseAnnotationOnTestClass');
    }

    public static testmethod void testX(){}
    public static testmethod void testY(){}
}