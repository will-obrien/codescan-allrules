// This component is generated to trigger the SonarJS rule: javascript:S1536
import { LightningElement } from 'lwc';

export default class s1536Trigger extends LightningElement {
    // Rule: Function argument names should be unique
    connectedCallback() {
        // This component triggers: javascript:S1536
        console.log('Triggering SonarJS rule: javascript:S1536');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1536";
        return example;
    }

    // Antipattern for S1536: Function argument names should be unique
    connectedCallback() {
        function compute(a, a, c) { // BAD: duplicate argument name
        }
    }
}