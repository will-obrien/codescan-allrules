// This component is generated to trigger the SonarJS rule: javascript:S5730
import { LightningElement } from 'lwc';

export default class s5730Trigger extends LightningElement {
    // Rule: Allowing mixed-content is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5730
        console.log('Triggering SonarJS rule: javascript:S5730');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5730";
        return example;
    }
}