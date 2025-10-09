public class HotspotCookiesTrigger {
    // This class triggers the HotspotCookies security hotspot
    
    public PageReference setCookieWithSensitiveData() {
        Cookie userCookie = new Cookie('CookieName', 'fieldValueToBeStoredAsCookie', null, 315569260, false);
        ApexPages.currentPage().setCookies(new Cookie[] {
            userCookie     //Bad: The cookie could be targeted by attackers to get access to sensitive information.
        });
        return null;
    }
}