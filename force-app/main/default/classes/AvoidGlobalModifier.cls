/**
 * This class demonstrates violation of sf:AvoidGlobalModifier rule
 * Global classes should be avoided (especially in managed packages) as they can never be deleted
 * or changed in signature. Always check twice if something needs to be global.
 */
global class AvoidGlobalModifier implements Schedulable {
    
    global void execute(SchedulableContext context) {
        // This global modifier is unnecessary for Schedulable interface
        System.debug('Executing scheduled job');
    }
    
    global void unnecessaryGlobalMethod() {
        // This method doesn't need to be global
        System.debug('This method should not be global');
    }
} 