// This component is generated to trigger the SonarJS rule: javascript:S1788
import { LightningElement } from 'lwc';

export default class s1788Trigger extends LightningElement {
    // Rule: Function parameters with default values should be last
    connectedCallback() {
        // This component triggers: javascript:S1788
        console.log('Triggering SonarJS rule: javascript:S1788');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1788";
        return example;
    }

    // Antipattern for S1788: Function parameters with default values should be last
    connectedCallback() {
        // BAD: Default parameter not last
        function multiply(a = 1, b) {
            return a * b;
        }
        let x = multiply(42); // returns NaN as b is undefined
    }
}