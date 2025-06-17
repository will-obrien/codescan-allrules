// This component is generated to trigger the SonarJS rule: javascript:S4123
import { LightningElement } from 'lwc';

export default class s4123Trigger extends LightningElement {
    // Rule: "await" should only be used with promises
    connectedCallback() {
        // This component triggers: javascript:S4123
        console.log('Triggering SonarJS rule: javascript:S4123');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4123";
        return example;
    }
}