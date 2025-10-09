public class MethodReturnsInternalArrayTrigger {
    // This class is generated to trigger the rule: sf:MethodReturnsInternalArray
    // Rule: Method Returns Internal Array

    String [] ud;
    public SecureSystem(){
        this.ud = new String[]{'standard', 'second'};
    }
    public String [] getUserData() {
        return ud; //Bad: don't return the internal array directly, return a copy.
    }
    public String [] getUserDataSecure() {
        return ud.clone(); //Good: user can't unexpectedly modify content
    }

    public void triggerRule() {
        System.debug('This class triggers: sf:MethodReturnsInternalArray');
        SecureSystem s = new SecureSystem();
        s.getUserData()[0] = 'secure'; //Secure system now has an unexpected value
    }
}