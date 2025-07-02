public class UseCollectionIsEmptyTrigger {
    // This class is generated to trigger the rule: sf:UseCollectionIsEmpty
    // Rule: Use Collection isEmpty
    public void triggerRule() {
        System.debug('This class triggers: sf:UseCollectionIsEmpty');
    }

    void bad() {
        List<String> foo = new List<String>();
        if (foo.size() == 0) { //Bad: Not recommended.
            System.debug('Do work');
        }
    }
}