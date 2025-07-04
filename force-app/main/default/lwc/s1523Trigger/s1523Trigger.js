// This component is generated to trigger the SonarJS rule: javascript:S1523
import { LightningElement } from 'lwc';

export default class s1523Trigger extends LightningElement {
    // Rule: Dynamically executing code is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S1523
        console.log('Triggering SonarJS rule: javascript:S1523');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1523";
        return example;
    }

    // Antipattern for S1523: Function constructors should not be used
    connectedCallback() {
        // BAD: Use of Function constructor
        var obj = new Function('return ' + 'data')();
    }
}