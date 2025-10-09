public class InsecureEndpointTrigger {
    // This class is generated to trigger the rule: sf:InsecureEndpoint
    // Rule: Avoid Cleartext Transmission of Sensitive Information
    public void triggerRule() {
        System.debug('This class triggers: sf:InsecureEndpoint');
    }

    public void foo() {
		String endpoint = 'http://localhost:3300';
		HttpRequest req = new HttpRequest();
		req.setEndpoint(endpoint);
	}
}