public class CommentContentTrigger {
    // This class is generated to trigger the rule: sf:CommentContent
    // Rule: Invalid Comment Words or Phrases Found
    public void triggerRule() {
        System.debug('This class triggers: sf:CommentContent');
    }

    /*
    * OMG, this is horrible, Bob is an idiot !!!    //Bad: That's not very nice!
    */
    public void foo() {}
}