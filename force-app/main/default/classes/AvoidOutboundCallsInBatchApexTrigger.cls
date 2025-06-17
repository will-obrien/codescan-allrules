global class AvoidOutboundCallsInBatchApexTrigger implements Database.Batchable<sObject>, Database.AllowsCallouts {
    global List<sObject> start(Database.BatchableContext bc) {
        return [SELECT Id FROM Account LIMIT 100];
    }
    
    global void execute(Database.BatchableContext bc, List<sObject> scope) {
        // Batch with callouts interface triggers rule
        System.debug('Processing batch');
    }
    
    global void finish(Database.BatchableContext bc) {
        System.debug('Batch finished');
    }
}