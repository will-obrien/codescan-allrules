public class BrokenNullCheckTrigger {
    // This class is generated to trigger the rule: sf:BrokenNullCheck
    // Rule: Broken Null Check
    public void triggerRule() {
        System.debug('This class triggers: sf:BrokenNullCheck');
    }

    public String bar(String st) { 
        if (st != null || !st.equals('')){	//Bad: Should be &&. The !string.equals statement will throw an exception if the string is null.
            return string;
        }
            
        if (st == null && st.equals('')){	//Bad: Should be ||. The && operator will cause the string.equals('') to throw an exception.
            return st;
        }
    }
}