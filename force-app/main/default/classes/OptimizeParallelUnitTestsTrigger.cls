@IsTest
public class OptimizeParallelUnitTestsTrigger {
    // This class triggers the rule: sf:OptimizeParallelUnitTests by having test methods that could run in parallel but don't
    
    @IsTest
    static void testAccountCreation() {
        // Triggers sf:OptimizeParallelUnitTests - this test could run in parallel but lacks @IsTest(IsParallel=true)
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        System.assertNotEquals(null, acc.Id);
    }
    
    @IsTest
    static void testContactCreation() {
        // Triggers sf:OptimizeParallelUnitTests - another independent test that could run in parallel
        Contact con = new Contact(
            FirstName = 'Test',
            LastName = 'Contact'
        );
        insert con;
        
        System.assertNotEquals(null, con.Id);
    }
    
    @IsTest
    static void testOpportunityCreation() {
        // Triggers sf:OptimizeParallelUnitTests - independent test without parallel execution
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        Opportunity opp = new Opportunity(
            Name = 'Test Opportunity',
            AccountId = acc.Id,
            StageName = 'Prospecting',
            CloseDate = Date.today().addDays(30)
        );
        insert opp;
        
        System.assertNotEquals(null, opp.Id);
    }
    
    @IsTest
    static void testUserValidation() {
        // Triggers sf:OptimizeParallelUnitTests - read-only test that could definitely run in parallel
        User currentUser = [SELECT Id, Name FROM User WHERE Id = :UserInfo.getUserId()];
        System.assertNotEquals(null, currentUser);
        System.assertNotEquals('', currentUser.Name);
    }

    public static void testSomething() {
        System.debug('No @IsTest(IsParallel) annotation');
    }
}