public class AvoidHardCodedCredentialTrigger {
    // This class is generated to trigger the rule: sf:AvoidHardCodedCredential
    // Rule: Avoid Using Hard Coded Credentials for Authentication
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidHardCodedCredential');
    }

    public void foo() {
        HttpRequest req = new HttpRequest();
        String username = 'admin';
        String password = 'password123';
        Blob headerValue = Blob.valueOf(username + ':' + password);
        String authorizationHeader = 'BASIC ' + EncodingUtil.base64Encode(headerValue);
        req.setHeader('Authorization', authorizationHeader); // Bad: Hardcoded credentials are not recommended.
    }
}