public class VariableNamingConventionsTrigger {
    // This class is generated to trigger the rule: sf:VariableNamingConventions
    // Rule: Variable Naming Conventions
    public void triggerRule() {
        System.debug('This class triggers: sf:VariableNamingConventions');
    }

    public static final Integer newNum = 2; //Bad: 'final' variable is named in camel-case.
    public String NEW_TEST = ''; //Bad: 'non-final' variable has underscores and is captalised.
}