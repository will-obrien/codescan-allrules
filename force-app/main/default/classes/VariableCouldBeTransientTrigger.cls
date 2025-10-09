public class VariableCouldBeTransientTrigger {
    // This class is generated to trigger the rule: sf:VariableCouldBeTransient
    // Rule: Controller Variable Could Be Declared Transient
    List<Account> accounts; //Bad: the amount of data may exceed the view-state limit.

    public void triggerRule() {
        System.debug('This class triggers: sf:VariableCouldBeTransient');
    }

   
}