public class CommentedOutCodeTrigger {
    // This class is generated to trigger the rule: sf:CommentedOutCode
    // Rule: Avoid Commented Out Code
    public void triggerRule() {
        System.debug('This class triggers: sf:CommentedOutCode');
    }

    /*
    void somethingCool(){
        //one day we should do this...     //Bad: remove this.
        if ( true ) {}
    }
    */
    public void foo() {}
}