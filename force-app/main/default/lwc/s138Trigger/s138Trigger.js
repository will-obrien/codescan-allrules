// This component is generated to trigger the SonarJS rule: javascript:S138
import { LightningElement } from 'lwc';

export default class s138Trigger extends LightningElement {
    // Rule: Functions should not have too many lines of code
    connectedCallback() {
        // This component triggers: javascript:S138
        console.log('Triggering SonarJS rule: javascript:S138');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S138";
        return example;
    }

    // Antipattern for S138: Functions should not have too many lines of code
    connectedCallback() {
        // BAD: Function with too many lines
        function bigFunction() {
            let sum = 0;
            for (let i = 0; i < 100; i++) {
                sum += i;
            }
            // ... imagine many more lines here ...
            return sum;
        }
    }
}