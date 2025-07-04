// This component is generated to trigger the SonarJS rule: javascript:S1821
import { LightningElement } from 'lwc';

export default class s1821Trigger extends LightningElement {
    // Rule: "switch" statements should not be nested
    connectedCallback() {
        // This component triggers: javascript:S1821
        console.log('Triggering SonarJS rule: javascript:S1821');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1821";
        return example;
    }

    // Antipattern for S1821: "switch" statements should not be nested
    connectedCallback() {
        function foo(n, m) {
            switch (n) {
                case 0:
                    switch (m) { // BAD: nested switch
                        // ...
                    }
                case 1:
                    // ...
                default:
                    // ...
            }
        }
    }
}