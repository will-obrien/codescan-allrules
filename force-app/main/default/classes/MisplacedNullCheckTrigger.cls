public class MisplacedNullCheckTrigger {
    // This class is generated to trigger the rule: sf:MisplacedNullCheck
    // Rule: Misplaced Null Check
    public void triggerRule() {
        System.debug('This class triggers: sf:MisplacedNullCheck');
    }

    public void bar(String a, String baz) {
        if (a.equals(baz) && a != null) { //Bad: If a is null, an exception will be thrown before the 'if' statement checks that a is not null.
            //...
        }
    }
}