// This component is generated to trigger the SonarJS rule: javascript:S4502
import { LightningElement } from 'lwc';

export default class s4502Trigger extends LightningElement {
    // Rule: Disabling CSRF protections is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S4502
        console.log('Triggering SonarJS rule: javascript:S4502');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4502";
        return example;
    }
}