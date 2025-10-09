public class IsBlankForNullChecksTrigger {
    // This class triggers the rule: sf:IsBlankForNullChecks by using != null instead of String.isBlank()
    
    public void processStrings(String input, String email, String phone) {
        // Triggers sf:IsBlankForNullChecks - should use String.isBlank() instead of null checks
        if (input != null) {
            System.debug('Input is not null: ' + input);
        }
        
        if (email != null && email != '') {
            processEmail(email);
        }
        
        if (phone != null) {
            if (phone.length() > 0) {
                processPhone(phone);
            }
        }
        
        String name = getAccountName();
        if (name != null) {
            System.debug('Account name: ' + name);
        }
        
        validateData(input);
    }
    
    private void validateData(String data) {
        // Triggers sf:IsBlankForNullChecks - more null checks that should use isBlank()
        if (data != null) {
            if (data.trim() != '') {
                System.debug('Data is valid');
            }
        }
        
        String status = getCurrentStatus();
        if (status != null && status != '') {
            updateStatus(status);
        }
    }
    
    private void processEmail(String email) {
        if (email != null) {
            System.debug('Processing email: ' + email);
        }
    }
    
    private void processPhone(String phone) {
        if (phone != null && phone.length() > 0) {
            System.debug('Processing phone: ' + phone);
        }
    }
    
    private String getAccountName() {
        return 'Test Account';
    }
    
    private String getCurrentStatus() {
        return 'Active';
    }
    
    private void updateStatus(String status) {
        System.debug('Status updated: ' + status);
    }
}