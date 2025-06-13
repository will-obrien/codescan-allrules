/**
 * This class demonstrates violation of sf:LongClassName rule
 * Class names that are too long can make the code difficult to follow.
 * Salesforce Developer Console restricts users from creating an Apex Class 
 * with class name greater than 40 characters.
 */
public class AnExcessivelyLongApexClassNameAsNegativeExampleToViolateLongClassNameRule {
    
    public void thisIsSomeReallyLongMethodNameThatViolatesTheLongMethodNameRule() {
        System.debug('This method name is excessively long');
    }
    
    public void anotherReallyLongMethodNameThatShouldBeShortened() {
        System.debug('Another long method name');
    }
    
    public String processDataWithAnUnnecessarilyLongMethodName(String input) {
        return input != null ? input.toUpperCase() : '';
    }
    
    public void performComplexBusinessLogicWithVeryLongMethodName() {
        List<Account> accounts = new List<Account>();
        for (Integer i = 0; i < 5; i++) {
            accounts.add(new Account(Name = 'Test Account ' + i));
        }
        insert accounts;
    }
    
    public Boolean validateInputDataWithExcessivelyLongMethodName(String data) {
        return String.isNotBlank(data) && data.length() > 0;
    }
} 