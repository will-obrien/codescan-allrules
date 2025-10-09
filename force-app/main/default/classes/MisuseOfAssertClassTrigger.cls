@IsTest
public class MisuseOfAssertClassTrigger {
    // This class triggers the rule: sf:MisuseOfAssertClass by misusing System.Assert methods
    
    @IsTest
    static void complexConditionCheck() {
        Integer a = 10;
        Integer b = 20;
        Boolean var = true;
        Boolean c = false;

        Assert.isFalse((a/b)>10 && (var) || c);
        Assert.isTrue(!(a>b) && (b<2));
    }
    
    @IsTest
    static void areEqualCheck() {
        String sub = 'abc';
        Assert.areEqual('cde', sub, 'Expected characters after first two'); //bad
        Assert.areNotEqual('xyz', sub, 'Characters not expected after first two'); // bad

    }
    
    @IsTest
    static void hardcodingCheck() {
        String s3 = 'Hardcoded';

        Assert.isNotNull(s3);
    }
    
    @IsTest
    static void nullCheck() {
        Account accObj = new Account();

        Assert.isNotNull(accObj);
    }
    
}