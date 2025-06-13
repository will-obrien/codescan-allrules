/**
 * This class demonstrates violation of sf:AvoidOutboundCallsInBatchApex rule
 * Avoid using the Database.AllowsCallouts interface in your Batch Apex classes as it is not 
 * recommended to make HTTP calls as part of your Batch Apex logic.
 */
global class AvoidOutboundCallsInBatchApex implements Database.Batchable<SObject>, Database.AllowsCallouts {
    
    global Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator('SELECT Id, Name, Phone FROM Account WHERE Phone != null');
    }
    
    global void execute(Database.BatchableContext bc, List<Account> accounts) {
        for (Account acc : accounts) {
            // BAD: Making HTTP callouts in batch execute method
            HttpRequest req = new HttpRequest();
            req.setEndpoint('https://api.example.com/validate-phone');
            req.setMethod('POST');
            req.setHeader('Content-Type', 'application/json');
            req.setBody('{"phone":"' + acc.Phone + '"}');
            
            Http http = new Http();
            HttpResponse res = http.send(req);
            
            if (res.getStatusCode() == 200) {
                acc.Phone = res.getBody();
            }
        }
        
        update accounts;
    }
    
    global void finish(Database.BatchableContext bc) {
        // BAD: Making callout in finish method
        HttpRequest finishReq = new HttpRequest();
        finishReq.setEndpoint('https://api.example.com/batch-complete');
        finishReq.setMethod('POST');
        finishReq.setBody('{"batch_id":"' + bc.getJobId() + '"}');
        
        Http http = new Http();
        HttpResponse res = http.send(finishReq);
        
        System.debug('Batch completion notification sent: ' + res.getStatusCode());
    }
} 