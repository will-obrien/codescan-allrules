trigger AvoidLogicInTriggerTrigger on OpportunityLineItem (before insert, after insert, after update) {
    
    if (trigger.isBefore && trigger.isInsert) {
        if (QuoteSyncUtil.isRunningTest) {
            for (OpportunityLineItem oli : trigger.new) {
                QuoteSyncUtil.populateRequiredFields(oli);
            }
        }    
        return;
    }
    
    if (TriggerStopper.stopOppLine) return;
       
    Set<String> quoteLineFields = QuoteSyncUtil.getQuoteLineFields();
    List<String> oppLineFields = QuoteSyncUtil.getOppLineFields();
    
    String qliFields = QuoteSyncUtil.getQuoteLineFieldsString();
    
    String oliFields =  QuoteSyncUtil.getOppLineFieldsString();
    
    String oliIds = '';
    for (OpportunityLineItem oli : trigger.new) {
        if (oliIds != '') oliIds += ', ';
        oliIds += '\'' + oli.Id + '\'';
    }

    String oliQuery = 'select Id, OpportunityId, PricebookEntryId, UnitPrice, Quantity, Discount, ServiceDate, SortOrder' + oliFields + ' from OpportunityLineItem where Id in (' + oliIds + ')';
    //System.debug(oliQuery); 
     
    List<OpportunityLineItem> olis = Database.query(oliQuery);
    
    Map<Id, List<OpportunityLineItem>> oppToOliMap = new Map<Id, List<OpportunityLineItem>>();    
    
    for (OpportunityLineItem oli : olis) {
        List<OpportunityLineItem> oliList = oppToOliMap.get(oli.OpportunityId);
        if (oliList == null) {
            oliList = new List<OpportunityLineItem>();
        } 
        oliList.add(oli);  
        oppToOliMap.put(oli.OpportunityId, oliList);       
    }

    Set<Id> oppIds = oppToOliMap.keySet();
    Map<Id, Opportunity> opps = new Map<Id, Opportunity>([select id, SyncedQuoteId from Opportunity where Id in :oppIds and SyncedQuoteId != null]);
    
    String quoteIds = '';
    for (Opportunity opp : opps.values()) {
        if (opp.SyncedQuoteId != null) {
           if (quoteIds != '') quoteIds += ', ';
           quoteIds += '\'' + opp.SyncedQuoteId + '\'';         
        }
    }
   
}