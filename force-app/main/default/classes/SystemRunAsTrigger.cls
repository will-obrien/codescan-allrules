@IsTest
public class SystemRunAsTrigger {
    // This class triggers the rule: sf:SystemRunAs by not using System.runAs for user permission testing
    
    @IsTest
    static void testUserPermissionsWithoutRunAs() {
        // Triggers sf:SystemRunAs - testing permissions without using System.runAs
        User testUser = createTestUser();
        
        // Should use System.runAs but doesn't
        Account acc = new Account(Name = 'Test Account');
        insert acc;
        
        // Testing user-specific logic without running as that user
        List<Account> userAccounts = [SELECT Id FROM Account WHERE CreatedById = :testUser.Id];
        System.assertEquals(0, userAccounts.size());
    }
    
    @IsTest
    static void testProfileSpecificBehavior() {
        // Triggers sf:SystemRunAs - testing profile-specific behavior without runAs
        Profile standardProfile = [SELECT Id FROM Profile WHERE Name = 'Standard User' LIMIT 1];
        User standardUser = new User(
            Alias = 'stuser',
            Email = 'standarduser@test.com',
            EmailEncodingKey = 'UTF-8',
            LastName = 'Standard',
            LanguageLocaleKey = 'en_US',
            LocaleSidKey = 'en_US',
            ProfileId = standardProfile.Id,
            TimeZoneSidKey = 'America/Los_Angeles',
            UserName = 'standarduser@test.com'
        );
        insert standardUser;
        
        // Should test as the standard user but doesn't use System.runAs
        Contact con = new Contact(FirstName = 'Test', LastName = 'Contact');
        insert con;
        
        System.assertNotEquals(null, con.Id);
    }
    
    @IsTest
    static void testVisibilityRules() {
        // Triggers sf:SystemRunAs - testing visibility without proper user context
        User limitedUser = createLimitedUser();
        
        // Testing record visibility without running as the limited user
        Account acc = new Account(Name = 'Private Account');
        insert acc;
        
        // This should be tested in the context of limitedUser using System.runAs
        List<Account> visibleAccounts = [SELECT Id FROM Account WHERE Name = 'Private Account'];
        System.assertEquals(1, visibleAccounts.size());
    }
    
    @IsTest
    static void testPermissionSetAssignment() {
        // Triggers sf:SystemRunAs - testing permission sets without user context
        User testUser = createTestUser();
        
        // Should assign permission set and test as that user
        try {
            PermissionSet ps = [SELECT Id FROM PermissionSet WHERE Name = 'CustomPermissionSet' LIMIT 1];
            PermissionSetAssignment psa = new PermissionSetAssignment(
                AssigneeId = testUser.Id,
                PermissionSetId = ps.Id
            );
            insert psa;
        } catch (Exception e) {
            // Permission set might not exist in test context
        }
        
        // Testing functionality that requires the permission set without System.runAs
        System.assertEquals(UserInfo.getUserId(), UserInfo.getUserId());
    }
    
    private static User createTestUser() {
        Profile p = [SELECT Id FROM Profile WHERE Name = 'Standard User' LIMIT 1];
        return new User(
            Alias = 'tuser',
            Email = 'testuser@test.com',
            EmailEncodingKey = 'UTF-8',
            LastName = 'Test',
            LanguageLocaleKey = 'en_US',
            LocaleSidKey = 'en_US',
            ProfileId = p.Id,
            TimeZoneSidKey = 'America/Los_Angeles',
            UserName = 'testuser@test.com'
        );
    }
    
    private static User createLimitedUser() {
        Profile p = [SELECT Id FROM Profile WHERE Name = 'Standard User' LIMIT 1];
        return new User(
            Alias = 'limuser',
            Email = 'limiteduser@test.com',
            EmailEncodingKey = 'UTF-8',
            LastName = 'Limited',
            LanguageLocaleKey = 'en_US',
            LocaleSidKey = 'en_US',
            ProfileId = p.Id,
            TimeZoneSidKey = 'America/Los_Angeles',
            UserName = 'limiteduser@test.com'
        );
    }
}