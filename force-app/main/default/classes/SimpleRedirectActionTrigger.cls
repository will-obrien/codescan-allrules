public class SimpleRedirectActionTrigger {
    // This class is generated to trigger the rule: sf:SimpleRedirectAction
    // Rule: Page Action with a simple redirection
    public void triggerRule() {
        System.debug('This class triggers: sf:SimpleRedirectAction');
    }

    public PageReference close() {
      PageReference pr = new PageReference('/home/home.jsp');
      pr.setRedirect(true); //Bad: The action method contains only client-side GET redirect.
      return pr;
    }
}