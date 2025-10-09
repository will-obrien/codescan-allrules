public class APIVersionsRetiredTrigger {
    // This class triggers the rule: sf:APIVersionsRetired by using retired or deprecated API versions
    
    public void makeDeprecatedAPICall() {
        // Triggers sf:APIVersionsRetired - using old API version
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://na1.salesforce.com/services/data/v20.0/sobjects/Account'); // Old API version
        req.setMethod('GET');
        
        Http http = new Http();
        try {
            HttpResponse res = http.send(req);
            System.debug('Response from old API: ' + res.getStatusCode());
        } catch (Exception e) {
            System.debug('Error with deprecated API call: ' + e.getMessage());
        }
    }
    
    public void useOldConnectAPI() {
        // Triggers sf:APIVersionsRetired - deprecated Connect API version
        String oldConnectAPIUrl = '/services/data/v25.0/connect/communities'; // Very old version
        System.debug('Using deprecated Connect API URL: ' + oldConnectAPIUrl);
        
        // Simulated old API usage patterns
        String legacyEndpoint = 'https://instance.salesforce.com/services/data/v21.0/query/';
        System.debug('Legacy query endpoint: ' + legacyEndpoint);
    }
    
    public void callRetiredSOAPAPI() {
        // Triggers sf:APIVersionsRetired - using very old SOAP API versions
        String soapEndpoint = 'https://na1.salesforce.com/services/Soap/u/15.0'; // Very old version
        System.debug('Using retired SOAP API version: ' + soapEndpoint);
        
        // Old metadata API version
        String metadataEndpoint = 'https://na1.salesforce.com/services/Soap/m/18.0';
        System.debug('Old Metadata API: ' + metadataEndpoint);
    }
    
    public void useDeprecatedBulkAPI() {
        // Triggers sf:APIVersionsRetired - old Bulk API version
        String bulkAPIUrl = 'https://na1.salesforce.com/services/async/22.0/job'; // Old Bulk API
        System.debug('Using deprecated Bulk API: ' + bulkAPIUrl);
        
        // Another old bulk API pattern
        String legacyBulkEndpoint = '/services/async/19.0/job';
        System.debug('Legacy bulk endpoint: ' + legacyBulkEndpoint);
    }
    
    public void makeOldRestAPICall() {
        // Triggers sf:APIVersionsRetired - using retired REST API versions
        
        // Very old REST API versions that should be updated
        List<String> deprecatedEndpoints = new List<String>{
            '/services/data/v23.0/sobjects/',
            '/services/data/v24.0/query/',
            '/services/data/v26.0/search/',
            '/services/data/v27.0/sobjects/Account',
            '/services/data/v28.0/analytics/reports'
        };
        
        for (String endpoint : deprecatedEndpoints) {
            System.debug('Deprecated REST API endpoint: ' + endpoint);
        }
    }
    
    public void useOldToolingAPI() {
        // Triggers sf:APIVersionsRetired - old Tooling API versions
        String toolingAPIUrl = 'https://na1.salesforce.com/services/data/v29.0/tooling/sobjects/';
        System.debug('Old Tooling API: ' + toolingAPIUrl);
        
        // More old tooling API patterns
        String legacyToolingEndpoint = '/services/data/v30.0/tooling/query/';
        System.debug('Legacy tooling endpoint: ' + legacyToolingEndpoint);
    }
    
    public void processOldAPIVersionReferences() {
        // Triggers sf:APIVersionsRetired - hardcoded old API versions
        
        Map<String, String> oldAPIVersions = new Map<String, String>{
            'REST' => 'v31.0',      // Old version
            'SOAP' => 'v32.0',      // Old version  
            'Bulk' => 'v33.0',      // Old version
            'Streaming' => 'v34.0', // Old version
            'Tooling' => 'v35.0'    // Old version
        };
        
        for (String apiType : oldAPIVersions.keySet()) {
            String version = oldAPIVersions.get(apiType);
            System.debug('Using old ' + apiType + ' API version: ' + version);
            
            // Simulate API calls with old versions
            String fullEndpoint = 'https://na1.salesforce.com/services/data/' + version + '/sobjects/';
            System.debug('Old API endpoint: ' + fullEndpoint);
        }
    }
    
    public void buildURLsWithOldVersions() {
        // Triggers sf:APIVersionsRetired - URL construction with retired versions
        
        String baseURL = 'https://myinstance.salesforce.com';
        
        // Building URLs with old API versions
        String oldQueryURL = baseURL + '/services/data/v36.0/query/?q=SELECT+Id+FROM+Account';
        String oldSObjectURL = baseURL + '/services/data/v37.0/sobjects/Contact/';
        String oldBatchURL = baseURL + '/services/data/v38.0/composite/batch';
        
        System.debug('Old query URL: ' + oldQueryURL);
        System.debug('Old SObject URL: ' + oldSObjectURL);
        System.debug('Old batch URL: ' + oldBatchURL);
        
        // More deprecated API version patterns
        List<String> deprecatedVersions = new List<String>{
            'v20.0', 'v21.0', 'v22.0', 'v23.0', 'v24.0',
            'v25.0', 'v26.0', 'v27.0', 'v28.0', 'v29.0'
        };
        
        for (String version : deprecatedVersions) {
            String deprecatedURL = baseURL + '/services/data/' + version + '/sobjects/';
            System.debug('Deprecated API URL: ' + deprecatedURL);
        }
    }
    
    public void referenceOldAPIVersionsInComments() {
        // Triggers sf:APIVersionsRetired - references to old versions in code
        
        /*
         * This code was written for API version v39.0
         * Update to use the latest API version available
         */
        
        // TODO: Update from v40.0 to latest version
        String apiVersion = 'v41.0'; // This version is now deprecated
        
        System.debug('Using API version: ' + apiVersion);
        
        // Legacy API version constants that should be updated
        final String LEGACY_API_VERSION = 'v42.0';
        final String OLD_SOAP_VERSION = 'v43.0';
        final String DEPRECATED_BULK_VERSION = 'v44.0';
        
        System.debug('Legacy versions: ' + LEGACY_API_VERSION + ', ' + OLD_SOAP_VERSION + ', ' + DEPRECATED_BULK_VERSION);
    }
    
    public void oldApiMethod() {
        System.debug('This class should have an old API version in its meta.xml');
    }
}