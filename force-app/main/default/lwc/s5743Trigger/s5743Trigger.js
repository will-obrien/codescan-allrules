// This component is generated to trigger the SonarJS rule: javascript:S5743
import { LightningElement } from 'lwc';

export default class s5743Trigger extends LightningElement {
    // Rule: Allowing browsers to perform DNS prefetching  is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5743
        console.log('Triggering SonarJS rule: javascript:S5743');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5743";
        return example;
    }
}