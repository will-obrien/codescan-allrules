// This component is generated to trigger the SonarJS rule: javascript:S1940
import { LightningElement } from 'lwc';

export default class s1940Trigger extends LightningElement {
    // Rule: Boolean checks should not be inverted
    connectedCallback() {
        // This component triggers: javascript:S1940
        console.log('Triggering SonarJS rule: javascript:S1940');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1940";
        return example;
    }

    // Antipattern for S1940: Boolean checks should not be inverted
    connectedCallback() {
        let a = 2;
        if (!(a === 2)) { // BAD: inverted boolean check
            // ...
        }
    }
}