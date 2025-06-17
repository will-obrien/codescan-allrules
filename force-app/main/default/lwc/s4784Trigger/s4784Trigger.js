// This component is generated to trigger the SonarJS rule: javascript:S4784
import { LightningElement } from 'lwc';

export default class s4784Trigger extends LightningElement {
    // Rule: Using regular expressions is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S4784
        console.log('Triggering SonarJS rule: javascript:S4784');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4784";
        return example;
    }
}