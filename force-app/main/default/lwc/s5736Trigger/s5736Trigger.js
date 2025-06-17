// This component is generated to trigger the SonarJS rule: javascript:S5736
import { LightningElement } from 'lwc';

export default class s5736Trigger extends LightningElement {
    // Rule: Disabling strict HTTP no-referrer policy is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5736
        console.log('Triggering SonarJS rule: javascript:S5736');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5736";
        return example;
    }
}