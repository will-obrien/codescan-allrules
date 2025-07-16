public class AvoidAbsoluteURLTrigger {
    // This class triggers the rule: sf:AvoidAbsoluteURL by using absolute URLs instead of relative URLs
    
    String fullUrl;
    public PageReference absoluteRedirect() {
      String secondUrl='https://login.visual.force.com/TestPage?some=thing'; //Using this hardcoded URL could fail depending on the environment it was run in
        if(x==1){
          fullUrl ='https://test.salesforce.com/TestPage?some=thing'; //Using this hardcoded URL could fail depending on the environment it was run in
          if(x==2){
            if(x==4){
            PageReference newUrl = new PageReference(fullUrl);
            }
          }
        }
        PageReference newUrl = new PageReference(secondUrl);
        newURL.setRedirect(true);
        return newURL;
    }
    public PageReference relativeRedirect() {
        String relativeUrl = URL.getSalesforceBaseUrl().toExternalForm() + '/TestPage?some=thing';  //Using a relative address make this code usable across any environment
        PageReference newUrl = new PageReference(relativeUrl);
        newURL.setRedirect(true);
        return newURL;
    }
    
}