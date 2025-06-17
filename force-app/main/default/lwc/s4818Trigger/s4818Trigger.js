// This component is generated to trigger the SonarJS rule: javascript:S4818
import { LightningElement } from 'lwc';

export default class s4818Trigger extends LightningElement {
    // Rule: Using Sockets is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S4818
        console.log('Triggering SonarJS rule: javascript:S4818');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4818";
        return example;
    }
}