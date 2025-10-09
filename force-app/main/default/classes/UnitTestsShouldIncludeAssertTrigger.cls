@IsTest
public class UnitTestsShouldIncludeAssertTrigger {
    // This class is generated to trigger the rule: sf:UnitTestsShouldIncludeAssert
    // Rule: Unit Test Method should include an assertion
    public static void testSomething() {
        Integer result = 3 + 4; //Bad: result is not checked.
    }
}