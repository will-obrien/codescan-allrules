// This component is generated to trigger the SonarJS rule: javascript:S4140
import { LightningElement } from 'lwc';

export default class s4140Trigger extends LightningElement {
    // Rule: Sparse arrays should not be declared
    connectedCallback() {
        // This component triggers: javascript:S4140
        console.log('Triggering SonarJS rule: javascript:S4140');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4140";
        return example;
    }
}