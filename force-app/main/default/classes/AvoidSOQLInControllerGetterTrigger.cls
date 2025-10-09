public class AvoidSOQLInControllerGetterTrigger {
    // This class is generated to trigger the rule: sf:AvoidSOQLInControllerGetter
    // Rule: Avoid SOQL in Controller Getter Methods

    public List<Account> lines {
		get {
			return [ select Id from Account ]; //BAD -
		}
	}
    
    public function getLines(){
		return [ select Id from Account ]; //BAD -
	}
	

    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidSOQLInControllerGetter');
    }
}