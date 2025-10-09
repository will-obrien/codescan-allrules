public class UselessParenthesesTrigger {
    // This class is generated to trigger the rule: sf:UselessParentheses
    // Rule: Useless Parentheses
    public void triggerRule() {
        System.debug('This class triggers: sf:UselessParentheses');
    }

    public void setBar(Integer n) {
        Integer _bar1 = Integer.valueOf((n)); //Bad: parentheses around n should be removed here...
        Integer _bar2 = (n); // ...and here
    }
}