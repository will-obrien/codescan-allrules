public class LawOfDemeterTrigger {
    // This class is generated to trigger the rule: sf:LawOfDemeter
    // Rule: Law of Demeter
    public void triggerRule() {
        System.debug('This class triggers: sf:LawOfDemeter');
    }

    public void example(Bar b) {
        C c = b.getC();
        c.doIt(); //Bad: This method call is a violation, as we are using c, which we got from B.
        b.getC().doIt(); //Bad: This is also a violation, just expressed differently as a method chain without temporary variables.
    }

    public class Bar {
        public C getC() { return new C(); }
    }

    public class C {
        public void doIt() {}
    }
}