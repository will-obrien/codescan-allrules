public class OpenRedirectTrigger {
    // This class is generated to trigger the rule: sf:OpenRedirect
    // Rule: URL Redirection to Untrusted Site
    public void triggerRule() {
        System.debug('This class triggers: sf:OpenRedirect');
    }

    String unsafeLocation = ApexPages.currentPage().getParameters().get('url_param'); //Bad: this is not recommended.
    public PageReference unsafePage() {
        if (unsafeLocation != null)
            return new PageReference(unsafeLocation);
        return null;
    }
}