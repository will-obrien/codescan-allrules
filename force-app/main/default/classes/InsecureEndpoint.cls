/**
 * This class demonstrates violation of sf:InsecureEndpoint rule
 * Checks against accessing endpoints under plain HTTP. You should always use HTTPS for security.
 */
public class InsecureEndpoint {
    
    public void makeHttpCallout() {
        // BAD: Using HTTP instead of HTTPS
        String endpoint = 'http://api.example.com/data';
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('GET');
        
        Http http = new Http();
        HttpResponse res = http.send(req);
        
        System.debug('Response: ' + res.getBody());
    }
    
    public void anotherInsecureCall() {
        // BAD: HTTP endpoint for sensitive data
        String insecureEndpoint = 'http://internal-api.company.com/users';
        
        HttpRequest request = new HttpRequest();
        request.setEndpoint(insecureEndpoint);
        request.setMethod('POST');
        request.setHeader('Content-Type', 'application/json');
        request.setBody('{"username": "admin", "password": "secret123"}');
        
        Http http = new Http();
        HttpResponse response = http.send(request);
    }
    
    public void multipleInsecureEndpoints() {
        List<String> endpoints = new List<String>{
            'http://service1.example.com/api',  // BAD: HTTP
            'http://service2.example.com/data', // BAD: HTTP
            'http://localhost:8080/test'        // BAD: HTTP even for localhost
        };
        
        for (String endpoint : endpoints) {
            HttpRequest req = new HttpRequest();
            req.setEndpoint(endpoint);
            req.setMethod('GET');
            
            Http http = new Http();
            HttpResponse res = http.send(req);
        }
    }
    
    public void dynamicInsecureEndpoint() {
        String baseUrl = 'http://dynamic-service.com';  // BAD: HTTP base URL
        String fullEndpoint = baseUrl + '/api/v1/users';
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint(fullEndpoint);
        req.setMethod('GET');
        
        Http http = new Http();
        HttpResponse res = http.send(req);
    }
} 