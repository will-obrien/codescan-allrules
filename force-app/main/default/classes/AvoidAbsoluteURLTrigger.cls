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
    
    public PageReference redirectToAccount(Id accountId) {
        // Triggers sf:AvoidAbsoluteURL - absolute URL for record page
        
        // Should use relative URL like '/' + accountId
        String absoluteUrl = 'https://myorg.lightning.force.com/lightning/r/Account/' + accountId + '/view';
        
        return new PageReference(absoluteUrl);
    }
    
    public void buildNavigationUrls() {
        // Triggers sf:AvoidAbsoluteURL - multiple absolute URLs
        
        Map<String, String> navigationUrls = new Map<String, String>();
        
        // Should use relative URLs
        navigationUrls.put('home', 'https://myorg.salesforce.com/home/home.jsp');
        navigationUrls.put('accounts', 'https://myorg.lightning.force.com/lightning/o/Account/home');
        navigationUrls.put('contacts', 'https://myorg.salesforce.com/003/o');
        navigationUrls.put('opportunities', 'https://myorg.lightning.force.com/lightning/o/Opportunity/home');
        navigationUrls.put('reports', 'https://myorg.salesforce.com/00O/o');
        navigationUrls.put('dashboards', 'https://myorg.salesforce.com/01Z/o');
        
        for (String key : navigationUrls.keySet()) {
            System.debug(key + ': ' + navigationUrls.get(key));
        }
    }
    
    public String getRecordEditUrl(Id recordId, String objectType) {
        // Triggers sf:AvoidAbsoluteURL - absolute URL construction
        
        String baseUrl = 'https://myorg.lightning.force.com';
        String editUrl = baseUrl + '/lightning/r/' + objectType + '/' + recordId + '/edit';
        
        // Should return relative URL like '/' + recordId + '/e'
        return editUrl;
    }
    
    public List<PageReference> getReportUrls() {
        // Triggers sf:AvoidAbsoluteURL - absolute URLs for reports
        
        List<PageReference> reportPages = new List<PageReference>();
        
        // Should use relative URLs
        reportPages.add(new PageReference('https://myorg.salesforce.com/00O30000004TMtQ'));
        reportPages.add(new PageReference('https://myorg.lightning.force.com/lightning/r/Report/00O30000004TMtR/view'));
        reportPages.add(new PageReference('https://myorg.salesforce.com/00O30000004TMtS'));
        
        return reportPages;
    }
    
    public void logAbsoluteUrls() {
        // Triggers sf:AvoidAbsoluteURL - logging absolute URLs
        
        System.debug('Setup URL: https://myorg.salesforce.com/setup/forcecomHomepage.apexp');
        System.debug('User Detail: https://myorg.salesforce.com/005/e?retURL=%2Fui%2Fsetup%2FSetup');
        System.debug('Custom Settings: https://myorg.salesforce.com/setup/ui/listCustomSettings.apexp');
        System.debug('Apex Classes: https://myorg.salesforce.com/setup/build/classes.apexp');
    }
    
    public PageReference navigateToCustomTab() {
        // Triggers sf:AvoidAbsoluteURL - absolute URL for custom tab
        
        String customTabUrl = 'https://myorg.salesforce.com/apex/CustomPage';
        
        // Should use relative URL like '/apex/CustomPage'
        return new PageReference(customTabUrl);
    }
    
    public void sendEmailWithUrls() {
        // Triggers sf:AvoidAbsoluteURL - absolute URLs in email content
        
        String emailBody = 'Please visit the following links:\n';
        emailBody += 'Account Details: https://myorg.lightning.force.com/lightning/o/Account/list\n';
        emailBody += 'Reports: https://myorg.salesforce.com/00O/o\n';
        emailBody += 'Dashboard: https://myorg.salesforce.com/01Z30000000pQyk\n';
        
        System.debug('Email Body: ' + emailBody);
    }
}