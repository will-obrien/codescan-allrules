public class OutboundEmailSendTrigger {
    public void sendEmail() {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setSubject('Test Email');
        mail.setToAddresses(new String[]{ 'test@example.com' });
        mail.setHtmlBody('Test email body');
        Messaging.sendEmail(new Messaging.SingleEmailMessage[]{ mail }); // Triggers rule
    }
}