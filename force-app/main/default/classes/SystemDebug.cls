/**
 * This class demonstrates violation of sf:SystemDebug rule
 * References to System.debug are usually intended for debugging purposes and can remain in
 * the codebase even in production code. This is a potential privacy violation.
 */
public class SystemDebug {
    
    public void processUserData() {
        String username = 'john.doe@example.com';
        String password = 'secretPassword123';
        
        // BAD: System.debug with sensitive information
        System.debug('Username: ' + username);
        System.debug('Password: ' + password);
        
        List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 5];
        
        // BAD: System.debug with potentially sensitive data
        System.debug('Retrieved accounts: ' + accounts);
        
        for (Account acc : accounts) {
            // BAD: System.debug in production code
            System.debug('Processing account: ' + acc.Name);
            
            try {
                // Some processing logic
                acc.Name = acc.Name + ' - Processed';
                update acc;
                
                // BAD: Debug statement for tracking
                System.debug('Successfully updated account: ' + acc.Id);
                
            } catch (Exception e) {
                // BAD: Debug with error information
                System.debug('Error updating account: ' + e.getMessage());
                System.debug('Stack trace: ' + e.getStackTraceString());
            }
        }
    }
    
    public void debugLevelsExample() {
        // BAD: All these System.debug statements should be removed
        System.debug(LoggingLevel.ERROR, 'Error level debug');
        System.debug(LoggingLevel.WARN, 'Warning level debug');
        System.debug(LoggingLevel.INFO, 'Info level debug');
        System.debug(LoggingLevel.DEBUG, 'Debug level debug');
        System.debug(LoggingLevel.FINE, 'Fine level debug');
        System.debug(LoggingLevel.FINER, 'Finer level debug');
        System.debug(LoggingLevel.FINEST, 'Finest level debug');
    }
} 