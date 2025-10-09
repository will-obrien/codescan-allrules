public class CsrfTrigger {
    // This class is generated to trigger the rule: sf:Csrf
    // Rule: Avoid Making DML Operations in Controller Constructor/Action Method
    public CsrfTrigger() {
		Account data = new Account();
        data.name='New data';  //Bad: not recommended.
		insert data;
	}
    public void triggerRule() {
        System.debug('This class triggers: sf:Csrf');
    }
}