/**
 * This class demonstrates violation of sf:AvoidHardCodedError rule
 * Error messages that are passed to the client should use custom labels or be set dynamically
 */
public class AvoidHardCodedError {
    
    public void processAccount(Account acc) {
        if (acc == null) {
            // BAD: Hard-coded error message
            throw new IllegalArgumentException('Account cannot be null');
        }
        
        if (String.isBlank(acc.Name)) {
            // BAD: Hard-coded error message in addError
            acc.addError('Account name is required', true);
        }
        
        if (acc.AnnualRevenue != null && acc.AnnualRevenue < 0) {
            // BAD: Hard-coded error message
            acc.AnnualRevenue.addError('Annual revenue cannot be negative');
        }
    }
    
    public void validateData(List<Contact> contacts) {
        for (Contact con : contacts) {
            if (String.isBlank(con.Email)) {
                // BAD: Hard-coded error message
                con.Email.addError('Email field is mandatory for all contacts');
            }
            
            if (con.Birthdate > Date.today()) {
                // BAD: Hard-coded error message with concatenation
                con.Birthdate.addError('Birth date cannot be in the future: ' + con.Birthdate);
            }
        }
    }
    
    public void auraExceptionExample(String input) {
        try {
            Integer value = Integer.valueOf(input);
            if (value < 0) {
                // BAD: Hard-coded AuraHandledException message
                throw new AuraHandledException('Value must be positive number');
            }
        } catch (Exception e) {
            // BAD: Hard-coded error message
            throw new AuraHandledException('Invalid input provided: ' + input);
        }
    }
    
    public void triggerHandlerExample() {
        if (Trigger.new.size() > 100) {
            // BAD: Hard-coded error message in trigger context
            Trigger.new[0].addError('Cannot process more than 100 records at once', false);
        }
        
        for (SObject record : Trigger.new) {
            // BAD: Hard-coded error with string concatenation
            record.addError('Record validation failed: ' + record.Id);
        }
    }
} 