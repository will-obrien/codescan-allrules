public class UseAnnotationOnTestClassTrigger {
    // This class is generated to trigger the rule: sf:UseAnnotationOnTestClass
    // Rule: Use the @IsTest annotation

    @IsTest
    public static void triggerRule() {
        System.debug('This class triggers: sf:UseAnnotationOnTestClass');
    }

    @IsTest
    public static  void testX(){}

    @IsTest
    public static  void testY(){}
}