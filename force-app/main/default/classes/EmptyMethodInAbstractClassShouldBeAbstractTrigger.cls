public abstract class EmptyMethodInAbstractClassShouldBeAbstractTrigger {
    public Object couldBeAbstract()  { //Bad: Method should be abstract.
        return null;
    }

    public void couldBeAbstract()  {
    }
} 