public class DuplicatedBlocksTrigger {
    // This class is generated to trigger the rule: common-sf:DuplicatedBlocks
    // Rule: Source files should not have any duplicated blocks
    public void triggerRule() {
        System.debug('This class triggers: common-sf:DuplicatedBlocks');
    }

    public void foo() {
        System.debug('Hello world!');
        System.debug('Hello world!');
        System.debug('Hello world!');
    }

    public void bar() {
        System.debug('Hello world!');
        System.debug('Hello world!');
        System.debug('Hello world!');
    }
}