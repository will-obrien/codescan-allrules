public class UseLocaleWithCaseConversionsTrigger {
    // This class is generated to trigger the rule: sf:UseLocaleWithCaseConversions
    // Rule: Use Locale with Case Conversions
    public void triggerRule() {
        System.debug('This class triggers: sf:UseLocaleWithCaseConversions');
    }

    public void foo(String x) {
        if (x.toLowerCase().equals('list')){ //Bad: This will not match 'LIST' when in Turkish locale.
            //...
        }
    }
}