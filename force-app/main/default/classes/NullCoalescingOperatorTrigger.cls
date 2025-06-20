public class NullCoalescingOperatorTrigger {
    // This class triggers the rule: sf:NullCoalescingOperator by using ternary operators instead of null coalescing
    
    public void processAccountData(Account acc) {
        // Triggers sf:NullCoalescingOperator - should use ?? instead of ternary
        String accountName = acc.Name != null ? acc.Name : 'Unknown Account';
        String accountType = acc.Type != null ? acc.Type : 'Unspecified';
        String phone = acc.Phone != null ? acc.Phone : 'No Phone';
        String website = acc.Website != null ? acc.Website : 'No Website';
        
        System.debug('Account: ' + accountName + ', Type: ' + accountType);
    }
    
    public String getContactInfo(Contact con) {
        // Triggers sf:NullCoalescingOperator - multiple ternary operators for null checks
        String firstName = con.FirstName != null ? con.FirstName : 'No First Name';
        String lastName = con.LastName != null ? con.LastName : 'No Last Name';
        String email = con.Email != null ? con.Email : 'No Email';
        String phone = con.Phone != null ? con.Phone : 'No Phone';
        
        return firstName + ' ' + lastName + ' - ' + email + ' - ' + phone;
    }
    
    public void setDefaultValues(Account acc) {
        // Triggers sf:NullCoalescingOperator - should use ?? operator
        acc.BillingStreet = acc.BillingStreet != null ? acc.BillingStreet : 'Unknown Street';
        acc.BillingCity = acc.BillingCity != null ? acc.BillingCity : 'Unknown City';
        acc.BillingState = acc.BillingState != null ? acc.BillingState : 'Unknown State';
        acc.BillingCountry = acc.BillingCountry != null ? acc.BillingCountry : 'Unknown Country';
        acc.Description = acc.Description != null ? acc.Description : 'No Description Available';
    }
    
    public String formatOpportunityInfo(Opportunity opp) {
        // Triggers sf:NullCoalescingOperator - ternary for null checks
        String name = opp.Name != null ? opp.Name : 'Unnamed Opportunity';
        String stage = opp.StageName != null ? opp.StageName : 'Unknown Stage';
        String amount = opp.Amount != null ? String.valueOf(opp.Amount) : '0';
        String source = opp.LeadSource != null ? opp.LeadSource : 'Unknown Source';
        
        return name + ' (' + stage + ') - $' + amount + ' from ' + source;
    }
    
    public void processStringData(String input1, String input2, String input3) {
        // Triggers sf:NullCoalescingOperator - multiple ternary operators
        String value1 = input1 != null ? input1 : 'Default1';
        String value2 = input2 != null ? input2 : 'Default2';
        String value3 = input3 != null ? input3 : 'Default3';
        
        String combined = value1 + '-' + value2 + '-' + value3;
        System.debug('Combined value: ' + combined);
    }
    
    public Integer getNumericValue(Integer input) {
        // Triggers sf:NullCoalescingOperator - ternary for numeric null check
        return input != null ? input : 0;
    }
    
    public Boolean getBooleanValue(Boolean input) {
        // Triggers sf:NullCoalescingOperator - ternary for boolean null check
        return input != null ? input : false;
    }
}