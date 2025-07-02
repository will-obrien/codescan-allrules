public class MisleadingVariableNameTrigger {
    // This class is generated to trigger the rule: sf:MisleadingVariableName
    // Rule: Misleading Variable Name
    private Integer m_foo; //Good: this is OK.
    public void bar(String m_baz) { //Bad: this is not recommended...
        Integer m_boz = 42; //...and neither is this.
    }

    public void triggerRule() {
        System.debug('This class triggers: sf:MisleadingVariableName');
    }
}