// This component is generated to trigger the SonarJS rule: javascript:S103
import { LightningElement } from 'lwc';

export default class s103Trigger extends LightningElement {
    // Rule: Lines should not be too long
    connectedCallback() {
        // This component triggers: javascript:S103
        console.log('Triggering SonarJS rule: javascript:S103');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S103";
        return example;
    }
}