// This component is generated to trigger the SonarJS rule: javascript:S4823
import { LightningElement } from 'lwc';

export default class s4823Trigger extends LightningElement {
    // Rule: Using command line arguments is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S4823
        console.log('Triggering SonarJS rule: javascript:S4823');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4823";
        return example;
    }
}