// This component is generated to trigger the SonarJS rule: javascript:S4507
import { LightningElement } from 'lwc';

export default class s4507Trigger extends LightningElement {
    // Rule: Delivering code in production with debug features activated is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S4507
        console.log('Triggering SonarJS rule: javascript:S4507');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4507";
        return example;
    }
}