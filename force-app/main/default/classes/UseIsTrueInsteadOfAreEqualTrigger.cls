@IsTest
public class UseIsTrueInsteadOfAreEqualTrigger {
    // This class triggers the rule: sf:UseIsTrueInsteadOfAreEqual by using Assert.areEqual for boolean true comparisons
    
    @IsTest
    static void testBooleanTrueComparison() {
        // Triggers sf:UseIsTrueInsteadOfAreEqual - should use Assert.isTrue
        boolean myVar = true;
        Assert.isTrue(myVar, 'myVar is true'); //Good: this is preferred.
        Assert.areEqual(true, myVar, 'myVar is true'); //Bad: this is not recommended.
    }
    
    
}