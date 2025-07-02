public class NonUnitTestContainsAssertsTrigger {
    // This class is generated to trigger the rule: sf:NonUnitTestContainsAsserts
    // Rule: Non Test Method Contains Asserts
    public void triggerRule() {
        System.debug('This class triggers: sf:NonUnitTestContainsAsserts');
    }

    public void aNonTestMethodWithAsserts() {
        boolean myVar = false;
        System.assertEquals(false, myVar); //Bad: assertions should not be used outside test methods.
    }
}