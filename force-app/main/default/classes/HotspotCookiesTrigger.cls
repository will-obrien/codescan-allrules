public class HotspotCookiesTrigger {
    // This class triggers the HotspotCookies security hotspot
    
    public PageReference setCookieWithSensitiveData() {
        String userId = UserInfo.getUserId();
        String sessionInfo = 'sensitive-session-data';
        
        // Security hotspot: Storing sensitive information in cookies
        Cookie userCookie = new Cookie('UserData', userId + '|' + sessionInfo, null, 315569260, false); // Triggers hotspot
        ApexPages.currentPage().setCookies(new Cookie[] { userCookie });
        
        return null;
    }
    
    public void createUnsecureCookie() {
        String sensitiveValue = 'credit-card-1234';
        
        // Security hotspot: Cookie with sensitive data and no security flags
        Cookie sensitiveCookie = new Cookie('PaymentInfo', sensitiveValue, null, -1, false); // Triggers hotspot
        Cookie[] cookies = new Cookie[] { sensitiveCookie };
        ApexPages.currentPage().setCookies(cookies);
    }
    
    public void storeUserCredentials(String username, String password) {
        // Security hotspot: Storing credentials in cookies
        Cookie credentialCookie = new Cookie('Credentials', username + ':' + password, null, 86400, false); // Triggers hotspot
        ApexPages.currentPage().setCookies(new Cookie[] { credentialCookie });
    }
}