// This component is generated to trigger the SonarJS rule: javascript:S5604
import { LightningElement } from 'lwc';

export default class s5604Trigger extends LightningElement {
    // Rule: Using intrusive permissions is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5604
        console.log('Triggering SonarJS rule: javascript:S5604');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5604";
        return example;
    }
}