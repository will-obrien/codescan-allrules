public class AvoidSizeOfSoqlTrigger {
    public void badMethod() {
        Integer count = [SELECT Id FROM Account].size(); // Triggers rule
        System.debug('Count: ' + count);
    }
}