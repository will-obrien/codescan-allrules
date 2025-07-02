trigger AvoidUsingBatchApexInTrigger on Opportunity (after insert, after update) {
    ID batchprocessid = Database.executeBatch(new SomeBatchClass()); //Bad: Executing Apex Batch from Trigger.
} 