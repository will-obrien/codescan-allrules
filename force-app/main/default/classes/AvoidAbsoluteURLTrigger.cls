public class AvoidAbsoluteURLTrigger {
    // This class triggers the rule: sf:AvoidAbsoluteURL by using absolute URLs instead of relative URLs
    
    public void generatePageReferences() {
        // Triggers sf:AvoidAbsoluteURL - absolute URLs to Salesforce pages
        
        // Should use relative URLs like '/001/o' instead
        String accountListUrl = 'https://myorg.lightning.force.com/lightning/o/Account/list';
        String contactListUrl = 'https://myorg.salesforce.com/003/o';
        String opportunityUrl = 'https://myorg.lightning.force.com/lightning/o/Opportunity/list';
        
        System.debug('Account List URL: ' + accountListUrl);
        System.debug('Contact List URL: ' + contactListUrl);
        System.debug('Opportunity URL: ' + opportunityUrl);
    }
    
    public PageReference redirectToAccount() {
        String fullUrl ='https://bad-practice.salesforce.com/TestPage?some=thing'; //Using this hardcoded URL could fail depending on the environment it was run in
        PageReference newUrl = new PageReference(fullURL);
        newURL.setRedirect(true);
        return newURL;
    }
    
}