public class UnnecessaryWrapperObjectCreationTrigger {
    // This class is generated to trigger the rule: sf:UnnecessaryWrapperObjectCreation
    // Rule: Unnecessary Wrapper Object Creation
    public void triggerRule() {
        System.debug('This class triggers: sf:UnnecessaryWrapperObjectCreation');
    }

    public Integer convert(String s) {
        Integer i, i2;
        i = Integer.valueOf(s).intValue(); //Bad: this wastes an object.
        i2 = Integer.valueOf(i).intValue(); //Bad: this wastes an object.
        String s3 = Integer.valueOf(i2).toString(); //Bad: this wastes an object.
        return i2;
    }
}