@IsTest
public class UseAreEqualInsteadOfIsTrueTrigger {
    // This class triggers the rule: sf:UseAreEqualInsteadOfIsTrue by using Assert.isTrue instead of Assert.areEqual
    
    @IsTest
    static void testAccountNameComparison() {
        // Triggers sf:UseAreEqualInsteadOfIsTrue - should use Assert.areEqual
        Object a, b;
        Assert.isTrue(a.equals(b)); //Bad: not recommended.
        Assert.areEqual(a, b);  //Good: this is preferred.
    }
}