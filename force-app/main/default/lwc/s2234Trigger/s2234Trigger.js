// This component is generated to trigger the SonarJS rule: javascript:S2234
import { LightningElement } from 'lwc';

export default class s2234Trigger extends LightningElement {
    // Rule: Parameters should be passed in the correct order
    connectedCallback() {
        // This component triggers: javascript:S2234
        console.log('Triggering SonarJS rule: javascript:S2234');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2234";
        return example;
    }

    // Antipattern for S2234: Parameters should be passed in the correct order
    connectedCallback() {
        function divide(divisor, dividend) {
            return divisor/dividend;
        }
        var divisor = 15;
        var dividend = 5;
        var result = divide(dividend, divisor); // BAD: swapped order
    }
}