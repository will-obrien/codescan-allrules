@IsTest
public class UseAreEqualInsteadOfAssertBooleanTrigger {
    // This class triggers the rule: sf:UseAreEqualInsteadOfAssertBoolean by using boolean equality when areEqual is better
    
    @IsTest
    static void testAccountTypeComparison() {
        // Triggers sf:UseAreEqualInsteadOfAssertBoolean - comparing specific values using boolean logic
        Account acc = new Account(Name = 'Test Account', Type = 'Customer');
        insert acc;
        
        Account retrievedAcc = [SELECT Type FROM Account WHERE Id = :acc.Id];
        
        // Should use System.assertEquals('Customer', retrievedAcc.Type)
        System.assert(retrievedAcc.Type == 'Customer');
        System.assert('Customer'.equals(retrievedAcc.Type));
    }
    
    @IsTest
    static void testStatusComparison() {
        // Triggers sf:UseAreEqualInsteadOfAssertBoolean - status field comparison
        Object a, b;
        Assert.isTrue(a == b); //Bad: not recommended.
        Assert.areEqual(a, b); //Good: this is preferred.

    }
    
  
}