public class AvoidThrowingNewInstanceOfSameExceptionTrigger {
    public void bar() {
        try {
            // do something
        } catch (SomeException se) {
            throw new SomeException(se);  //Bad: this is not recommended.
        }
    }
} 