// This component is generated to trigger the SonarJS rule: javascript:S2123
import { LightningElement } from 'lwc';

export default class s2123Trigger extends LightningElement {
    // Rule: Values should not be uselessly incremented
    connectedCallback() {
        // This component triggers: javascript:S2123
        console.log('Triggering SonarJS rule: javascript:S2123');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2123";
        return example;
    }

    // Antipattern for S2123: Values should not be uselessly incremented
    connectedCallback() {
        function pickNumber() {
            let i = 0;
            i = i++; // BAD: i is still zero
            return i++; // BAD: 0 returned
        }
    }
}