// This component is generated to trigger the SonarJS rule: javascript:S6299
import { LightningElement } from 'lwc';

export default class s6299Trigger extends LightningElement {
    // Rule: Disabling Vue.js built-in escaping is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S6299
        console.log('Triggering SonarJS rule: javascript:S6299');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S6299";
        return example;
    }
}