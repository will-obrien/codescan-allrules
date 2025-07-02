public class NPathComplexityTrigger {
    // This class is generated to trigger the rule: sf:NPathComplexity
    // Rule: NPath Complexity
    public void triggerRule() {
        System.debug('This class triggers: sf:NPathComplexity');
    }

    void bar() {
        if (true) {
            for (Integer j = 0; j < 10; j++) {
                if (j > 5) {
                    while (j < 8) {
                        // complex
                    }
                } else {
                    // more
                }
            }
            if (5 > 3) {
                while (true) {
                    // more
                    break;
                }
            }
            try {
                // dangerous
            } catch (Exception ex) {
                // handle
            } finally {
                // cleanup
            }
        }
    }
}