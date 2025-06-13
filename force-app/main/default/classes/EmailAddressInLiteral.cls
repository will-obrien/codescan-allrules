/**
 * This class demonstrates violation of sf:EmailAddressInLiteral rule
 * Avoid hardcoded email addresses in code
 */
public class EmailAddressInLiteral {
    
    public void sendNotificationEmail() {
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        
        // BAD: Hard-coded email addresses
        email.setToAddresses(new String[]{'admin@company.com', 'support@company.com'});
        email.setCcAddresses(new String[]{'manager@company.com'});
        email.setBccAddresses(new String[]{'audit@company.com'});
        
        email.setSubject('System Notification');
        email.setPlainTextBody('This is a system notification.');
        
        Messaging.sendEmail(new Messaging.SingleEmailMessage[]{email});
    }
    
    public void processUserRegistration(String userName) {
        // BAD: Hard-coded email in string comparison
        if (userName.equals('test@example.com')) {
            System.debug('Test user detected');
        }
        
        // BAD: Hard-coded email in error message
        throw new IllegalArgumentException('Please contact support@company.com for assistance');
    }
    
    public void configureEmailSettings() {
        // BAD: Hard-coded emails in configuration
        String defaultSender = 'noreply@company.com';
        String supportEmail = 'help@company.com';
        String salesEmail = 'sales@company.com';
        
        Map<String, String> emailConfig = new Map<String, String>{
            'support' => 'support@company.com',     // BAD: Hard-coded email
            'sales' => 'sales@company.com',         // BAD: Hard-coded email  
            'marketing' => 'marketing@company.com'  // BAD: Hard-coded email
        };
    }
    
    public Boolean isValidUser(String email) {
        // BAD: Hard-coded admin emails
        List<String> adminEmails = new List<String>{
            'admin@company.com',
            'superuser@company.com', 
            'root@company.com'
        };
        
        return adminEmails.contains(email);
    }
    
    public void sendWelcomeEmail() {
        // BAD: Hard-coded sender email
        String fromEmail = 'welcome@company.com';
        
        Messaging.SingleEmailMessage msg = new Messaging.SingleEmailMessage();
        msg.setSenderDisplayName('Company Welcome Team');
        msg.setReplyTo('no-reply@company.com');  // BAD: Hard-coded reply-to
        msg.setSubject('Welcome to our platform!');
    }
} 