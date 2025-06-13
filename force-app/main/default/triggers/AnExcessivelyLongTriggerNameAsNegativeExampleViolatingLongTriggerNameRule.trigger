/**
 * This trigger demonstrates violation of sf:LongTriggerName rule
 * Trigger names that are too long can make the code difficult to follow.
 */
trigger AnExcessivelyLongTriggerNameAsNegativeExampleViolatingLongTriggerNameRule on Account (before insert, before update) {
    
    // BAD: This trigger name is excessively long
    for (Account acc : Trigger.new) {
        if (String.isBlank(acc.Name)) {
            acc.addError('Account name is required');
        }
        
        // BAD: System.debug in trigger
        System.debug('Processing account: ' + acc.Name);
    }
} 