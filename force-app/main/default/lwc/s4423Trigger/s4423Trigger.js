// This component is generated to trigger the SonarJS rule: javascript:S4423
import { LightningElement } from 'lwc';

export default class s4423Trigger extends LightningElement {
    // Rule: Weak SSL/TLS protocols should not be used
    connectedCallback() {
        // This component triggers: javascript:S4423
        console.log('Triggering SonarJS rule: javascript:S4423');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4423";
        return example;
    }
}