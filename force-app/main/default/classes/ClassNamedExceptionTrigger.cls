public class ClassNamedExceptionTrigger {
    // This class is generated to trigger the rule: sf:ClassNamedException
    // Rule: Exception Classes Should Extend an Exception
    public void triggerRule() {
        System.debug('This class triggers: sf:ClassNamedException');
    }
}

public class MyException { //Bad: we would expect this class to be an exception
}