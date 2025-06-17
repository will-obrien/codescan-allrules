public class AuraEnabledWithoutCatchBlockTrigger {
    @AuraEnabled
    public static String getSomething() {
        // Missing try-catch block - triggers rule
        return 'Some data';
    }
}