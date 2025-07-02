public class AvoidHttpRefererTrigger {
    // This class is generated to trigger the rule: sf:AvoidHttpReferer
    // Rule: Avoid Using HTTP Referer Headers
    public void triggerRule() {
        System.debug('This class triggers: sf:AvoidHttpReferer');
    }

    public void makeHttpRequestWithReferer() {
        // Triggers sf:AvoidHttpReferer - setting HTTP Referer header
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://api.external-service.com/data');
        req.setMethod('GET');
        
        // This triggers the rule - setting Referer header
        req.setHeader('Referer', 'https://myorg.salesforce.com/apex/MyPage');
        req.setHeader('User-Agent', 'Salesforce Integration');
        
        Http http = new Http();
        try {
            HttpResponse res = http.send(req);
            System.debug('Response: ' + res.getStatusCode());
        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
        }
    }
    
    public void setVariousRefererHeaders() {
        // Triggers sf:AvoidHttpReferer - multiple referer header variations
        HttpRequest request1 = new HttpRequest();
        request1.setEndpoint('https://api.example1.com/endpoint');
        request1.setMethod('POST');
        
        // Different ways to set referer headers (all trigger the rule)
        request1.setHeader('Referer', 'https://my-salesforce.lightning.force.com/');
        
        HttpRequest request2 = new HttpRequest();
        request2.setEndpoint('https://api.example2.com/endpoint');
        request2.setMethod('GET');
        request2.setHeader('HTTP_REFERER', 'https://my-org.my.salesforce.com/'); // Alternative header name
        
        HttpRequest request3 = new HttpRequest();
        request3.setEndpoint('https://api.example3.com/endpoint');
        request3.setMethod('PUT');
        request3.setHeader('REFERER', 'https://salesforce.lightning.force.com/'); // Case variation
        
        System.debug('Multiple referer headers set');
    }
    
    public void processWebhookWithReferer(String webhookUrl, String originPage) {
        // Triggers sf:AvoidHttpReferer - webhook calls with referer
        HttpRequest webhookRequest = new HttpRequest();
        webhookRequest.setEndpoint(webhookUrl);
        webhookRequest.setMethod('POST');
        webhookRequest.setHeader('Content-Type', 'application/json');
        
        // Setting referer based on parameter
        webhookRequest.setHeader('Referer', originPage);
        
        String payload = '{"message": "Data from Salesforce", "timestamp": "' + System.now() + '"}';
        webhookRequest.setBody(payload);
        
        Http http = new Http();
        try {
            HttpResponse response = http.send(webhookRequest);
            System.debug('Webhook response: ' + response.getStatusCode());
        } catch (Exception e) {
            System.debug('Webhook error: ' + e.getMessage());
        }
    }
    
    public void callThirdPartyAPIWithTracking() {
        // Triggers sf:AvoidHttpReferer - API calls with tracking referer
        List<String> apiEndpoints = new List<String>{
            'https://analytics.external.com/track',
            'https://api.partner.com/integrate',
            'https://webhooks.service.com/notify'
        };
        
        for (String endpoint : apiEndpoints) {
            HttpRequest req = new HttpRequest();
            req.setEndpoint(endpoint);
            req.setMethod('POST');
            req.setHeader('Content-Type', 'application/json');
            
            // Problematic referer header for tracking
            req.setHeader('Referer', 'https://my-company.lightning.force.com/lightning/r/Account/001XX000003DHP0/view');
            
            String data = '{"source": "salesforce", "integration": "active"}';
            req.setBody(data);
            
            System.debug('API call to: ' + endpoint);
        }
    }
    
    public void authenticateWithRefererValidation() {
        // Triggers sf:AvoidHttpReferer - authentication using referer
        HttpRequest authRequest = new HttpRequest();
        authRequest.setEndpoint('https://auth.external-system.com/validate');
        authRequest.setMethod('POST');
        
        // Using referer for authentication validation (security risk)
        authRequest.setHeader('Referer', 'https://trusted-salesforce-org.my.salesforce.com/');
        authRequest.setHeader('Authorization', 'Bearer token123');
        
        String authData = '{"client_id": "sf_integration", "scope": "read_write"}';
        authRequest.setBody(authData);
        
        Http http = new Http();
        try {
            HttpResponse authResponse = http.send(authRequest);
            if (authResponse.getStatusCode() == 200) {
                System.debug('Authentication successful');
            }
        } catch (Exception e) {
            System.debug('Authentication failed: ' + e.getMessage());
        }
    }
    
    public void sendMetricsWithReferer() {
        // Triggers sf:AvoidHttpReferer - metrics reporting with referer
        HttpRequest metricsRequest = new HttpRequest();
        metricsRequest.setEndpoint('https://metrics.monitoring.com/report');
        metricsRequest.setMethod('POST');
        metricsRequest.setHeader('Content-Type', 'application/json');
        
        // Referer header for source tracking
        metricsRequest.setHeader('Referer', 'https://mycompany.lightning.force.com/lightning/app/Sales');
        
        Map<String, Object> metrics = new Map<String, Object>{
            'timestamp' => System.now().getTime(),
            'source' => 'salesforce',
            'user_count' => 150,
            'active_sessions' => 45
        };
        
        metricsRequest.setBody(JSON.serialize(metrics));
        
        System.debug('Sending metrics with referer header');
    }
    
    public void buildHeadersMap() {
        // Triggers sf:AvoidHttpReferer - building headers map with referer
        Map<String, String> httpHeaders = new Map<String, String>{
            'Content-Type' => 'application/json',
            'Accept' => 'application/json',
            'User-Agent' => 'Salesforce-Integration/1.0',
            'Referer' => 'https://org.my.salesforce.com/apex/IntegrationPage', // Problematic
            'X-Requested-With' => 'XMLHttpRequest'
        };
        
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://api.external.com/submit');
        request.setMethod('POST');
        
        // Setting headers from map
        for (String headerName : httpHeaders.keySet()) {
            request.setHeader(headerName, httpHeaders.get(headerName));
        }
        
        System.debug('Headers set from map including referer');
    }
    
    public void handleLegacyIntegration() {
        // Triggers sf:AvoidHttpReferer - legacy integration with referer requirements
        HttpRequest legacyRequest = new HttpRequest();
        legacyRequest.setEndpoint('https://legacy.partner.com/api/v1/sync');
        legacyRequest.setMethod('POST');
        
        // Legacy system requires referer header (still a security concern)
        legacyRequest.setHeader('Referer', 'https://authorized-salesforce.lightning.force.com/');
        legacyRequest.setHeader('X-Legacy-Auth', 'legacy_token_123');
        
        String legacyData = '<xml><data>legacy format</data></xml>';
        legacyRequest.setBody(legacyData);
        
        System.debug('Legacy integration with referer header');
    }

    public static void foo() {
        String referer = ApexPages.currentPage().getHeaders().get('Referer'); // Bad: Do not rely on Referer headers.
        System.debug(referer);
    }
}