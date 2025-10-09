public class AvoidEmailInLoopsTrigger {
    // This class triggers the rule: sf:AvoidEmailInLoops by sending emails inside loops
    
    public void processAccountNotifications(List<Account> accounts) {
        // Triggers sf:AvoidEmailInLoops - sending emails in a loop
        for (Account acc : accounts) {
            if (acc.Type == 'Customer' && acc.AnnualRevenue > 1000000) {
                // Should collect emails and send in bulk outside the loop
                Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
                email.setToAddresses(new String[]{'manager@company.com'});
                email.setSubject('High Value Customer Alert: ' + acc.Name);
                email.setPlainTextBody('Account ' + acc.Name + ' has annual revenue of $' + acc.AnnualRevenue);
                
                // This triggers the rule - sending email inside loop
                Messaging.sendEmail(new Messaging.SingleEmailMessage[]{email});
            }
        }
    }
    
    public void sendWelcomeEmails(List<Contact> newContacts) {
        // Triggers sf:AvoidEmailInLoops - individual email sending in loop
        for (Contact con : newContacts) {
            if (!String.isBlank(con.Email)) {
                Messaging.SingleEmailMessage welcomeEmail = new Messaging.SingleEmailMessage();
                welcomeEmail.setToAddresses(new String[]{con.Email});
                welcomeEmail.setSubject('Welcome to Our Company!');
                welcomeEmail.setPlainTextBody('Dear ' + con.FirstName + ',\n\nWelcome to our company!');
                
                // Rule violation - sending emails in loop
                Messaging.sendEmail(new Messaging.SingleEmailMessage[]{welcomeEmail});
                
                System.debug('Welcome email sent to: ' + con.Email);
            }
        }
    }
    
    public void notifyAccountManagers(Map<Id, List<Opportunity>> accountOpportunityMap) {
        // Triggers sf:AvoidEmailInLoops - nested loop with email sending
        for (Id accountId : accountOpportunityMap.keySet()) {
            List<Opportunity> opportunities = accountOpportunityMap.get(accountId);
            
            for (Opportunity opp : opportunities) {
                if (opp.StageName == 'Closed Won' && opp.Amount > 50000) {
                    // Should batch these emails instead
                    Messaging.SingleEmailMessage notification = new Messaging.SingleEmailMessage();
                    notification.setToAddresses(new String[]{'sales@company.com'});
                    notification.setSubject('Big Deal Closed: ' + opp.Name);
                    notification.setPlainTextBody('Opportunity ' + opp.Name + ' closed for $' + opp.Amount);
                    
                    // Rule violation in nested loop
                    Messaging.sendEmail(new Messaging.SingleEmailMessage[]{notification});
                }
            }
        }
    }
    
    public void sendReminderEmails(List<Task> overdueTasks) {
        // Triggers sf:AvoidEmailInLoops - sending reminder emails in loop
        for (Task task : overdueTasks) {
            if (task.OwnerId != null && task.ActivityDate < Date.today()) {
                User taskOwner = [SELECT Email FROM User WHERE Id = :task.OwnerId LIMIT 1];
                
                if (!String.isBlank(taskOwner.Email)) {
                    Messaging.SingleEmailMessage reminder = new Messaging.SingleEmailMessage();
                    reminder.setToAddresses(new String[]{taskOwner.Email});
                    reminder.setSubject('Overdue Task Reminder: ' + task.Subject);
                    reminder.setPlainTextBody('Your task "' + task.Subject + '" is overdue.');
                    
                    // Rule violation - email in loop with SOQL query
                    Messaging.sendEmail(new Messaging.SingleEmailMessage[]{reminder});
                }
            }
        }
    }
    
    public void processLeadNotifications(List<Lead> hotLeads) {
        // Triggers sf:AvoidEmailInLoops - multiple email types in loop
        for (Lead lead : hotLeads) {
            if (lead.Rating == 'Hot') {
                // Sales team notification
                Messaging.SingleEmailMessage salesNotification = new Messaging.SingleEmailMessage();
                salesNotification.setToAddresses(new String[]{'sales-team@company.com'});
                salesNotification.setSubject('Hot Lead Alert: ' + lead.Company);
                salesNotification.setPlainTextBody('New hot lead from ' + lead.Company);
                
                // Marketing team notification
                Messaging.SingleEmailMessage marketingNotification = new Messaging.SingleEmailMessage();
                marketingNotification.setToAddresses(new String[]{'marketing@company.com'});
                marketingNotification.setSubject('Lead Qualification Success');
                marketingNotification.setPlainTextBody('Lead ' + lead.Company + ' qualified as hot');
                
                // Double rule violation - multiple emails in same loop iteration
                Messaging.sendEmail(new Messaging.SingleEmailMessage[]{salesNotification});
                Messaging.sendEmail(new Messaging.SingleEmailMessage[]{marketingNotification});
            }
        }
    }
    
    public void sendCustomerSurveys(List<Case> closedCases) {
        // Triggers sf:AvoidEmailInLoops - survey emails in loop
        Integer emailCount = 0;
        
        for (Case closedCase : closedCases) {
            if (closedCase.Status == 'Closed' && closedCase.ContactId != null) {
                Contact customer = [SELECT Email FROM Contact WHERE Id = :closedCase.ContactId LIMIT 1];
                
                if (!String.isBlank(customer.Email)) {
                    Messaging.SingleEmailMessage survey = new Messaging.SingleEmailMessage();
                    survey.setToAddresses(new String[]{customer.Email});
                    survey.setSubject('How was your support experience?');
                    survey.setPlainTextBody('Please rate your recent support case: ' + closedCase.CaseNumber);
                    
                    // Rule violation with counter
                    Messaging.sendEmail(new Messaging.SingleEmailMessage[]{survey});
                    emailCount++;
                    
                    System.debug('Survey email ' + emailCount + ' sent for case: ' + closedCase.CaseNumber);
                }
            }
        }
    }
}