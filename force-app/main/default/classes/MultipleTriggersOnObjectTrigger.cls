public class MultipleTriggersOnObjectTrigger {
    // This class is generated to trigger the rule: sf:MultipleTriggersOnObject
    // Rule: Avoid creating multiple triggers on the same object
    public void triggerRule() {
        System.debug('This class triggers: sf:MultipleTriggersOnObject');
    }
}

trigger AccountTriggerInsert on Account (before insert) { //Bad: Multiple triggers on the same object should be avoided.
}
trigger AccountTriggerUpdate on Account (before update) {
}