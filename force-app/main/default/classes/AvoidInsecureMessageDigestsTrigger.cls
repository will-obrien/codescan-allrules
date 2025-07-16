public class AvoidInsecureMessageDigestsTrigger {
    // This class is generated to trigger the rule: sf:AvoidInsecureMessageDigests
    // Rule: Avoid Insecure Digest Algorithms
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidInsecureMessageDigests');
    }

    public void insecureDigests() {
        Blob blob = Blob.valueOf('test');
        Blob md5 = Crypto.generateDigest('MD5', blob); // Bad: This is not secure.
        Blob sha1 = Crypto.generateDigest('SHA1', blob); // Bad: This is not secure.
        System.debug(md5);
        System.debug(sha1);
    }


    public void insecureDigestsSimple() {
        Crypto.generateDigest('MD5', blob); //BAD: not secure
        Crypto.generatemac('sha1', blob); //BAD: not secure
}