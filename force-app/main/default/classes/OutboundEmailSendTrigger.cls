public class OutboundEmailSendTrigger {
    public void sendEmail() {
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        mail.setSubject('Hello team');
        mail.setToAddresses(new String[] {'test@codescan.io'});
        mail.setHTMLBody('Testing my email');
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail }); //Bad: Sending outbound emails using Messaging.sendEmail.
    }
}