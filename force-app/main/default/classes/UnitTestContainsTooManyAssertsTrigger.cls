@isTest
public class UnitTestContainsTooManyAssertsTrigger {
    // This class is generated to trigger the rule: sf:UnitTestContainsTooManyAsserts
    // Rule: Unit Test Method Contains Too Many Asserts
    @isTest
    public static void testMyCaseWithMoreAsserts() {
        boolean myVar = false;        
        System.assert(myVar);
        System.assertEquals(false, myVar);
        System.assertEquals(true, !myVar);
        System.assertEquals(false, myVar, 'Should be false');
    }
}