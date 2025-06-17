// This component is generated to trigger the SonarJS rule: javascript:S106
import { LightningElement } from 'lwc';

export default class s106Trigger extends LightningElement {
    // Rule: Standard outputs should not be used directly to log anything
    connectedCallback() {
        // This component triggers: javascript:S106
        console.log('Triggering SonarJS rule: javascript:S106');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S106";
        return example;
    }
}