// This component is generated to trigger the SonarJS rule: javascript:S1515
import { LightningElement } from 'lwc';

export default class s1515Trigger extends LightningElement {
    // Rule: Functions should not be defined inside loops
    connectedCallback() {
        // This component triggers: javascript:S1515
        console.log('Triggering SonarJS rule: javascript:S1515');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1515";
        return example;
    }
}