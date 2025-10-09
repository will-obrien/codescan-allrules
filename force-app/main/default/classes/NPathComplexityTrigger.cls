public class NPathComplexityTrigger {
    // This class is generated to trigger the rule: sf:NPathComplexity
    // Rule: NPath Complexity
    public void triggerRule() {
        System.debug('This class triggers: sf:NPathComplexity');
    }

    public void bar() {						// this is something more complex than it needs to be,
        if (y) {						// it should be broken down into smaller methods or functions
            for (j = 0; j < m; j++) {
                if (j > r) {
                    doSomething();
                    while (f < 5 ) {
                        anotherThing();
                        f -= 27;
                        }
                    } else {
                        tryThis();
                    }
                }
            }
            if ( r - n > 45) {
            while (doMagic()) {
                findRabbits();
            }
            }
            try {
                doSomethingDangerous();
            } catch (Exception ex) {
                makeAmends();
            } finally {
                    dontDoItAgain();
            }
        }

}