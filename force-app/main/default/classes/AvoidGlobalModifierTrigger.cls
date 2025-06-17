global class AvoidGlobalModifierTrigger implements Schedulable {
    global void execute(SchedulableContext context) {
        // This global class triggers the AvoidGlobalModifier rule
        System.debug('Global modifier used unnecessarily');
    }
}