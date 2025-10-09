public class HotspotUserInfoGetSessionIdUsageTrigger {
    // This class triggers the HotspotUserInfoGetSessionIdUsage security hotspot
    
    public void makeHttpCalloutWithSessionId() {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://external-api.example.com/data');
        req.setMethod('GET');
        
        // Security hotspot: Using session ID in HTTP header
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId()); // Triggers hotspot
        req.setHeader('X-Session-Token', UserInfo.getSessionId()); // Triggers hotspot
        
        Http http = new Http();
        try {
            HttpResponse res = http.send(req);
            System.debug('Response: ' + res.getBody());
        } catch (Exception e) {
            System.debug('Error: ' + e.getMessage());
        }
    }
    
    public String exposeSessionId() {
        // Security hotspot: Returning session ID
        return UserInfo.getSessionId(); // Triggers hotspot
    }
    
    public void logSessionId() {
        String sessionId = UserInfo.getSessionId(); // Triggers hotspot
        System.debug('Current session: ' + sessionId); // Potentially logging sensitive data
    }
    
    public void storeSessionId() {
        // Security hotspot: Storing session ID in variable
        String currentSession = UserInfo.getSessionId(); // Triggers hotspot
        // Potentially storing in database or other persistent storage
    }

    public void foo() {
        HttpRequest req = new HttpRequest();
        req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionId());   //There may be a workaround for this.
    }
}