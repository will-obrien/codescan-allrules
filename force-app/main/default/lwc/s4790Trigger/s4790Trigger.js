// This component is generated to trigger the SonarJS rule: javascript:S4790
import { LightningElement } from 'lwc';

export default class s4790Trigger extends LightningElement {
    // Rule: Using weak hashing algorithms is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S4790
        console.log('Triggering SonarJS rule: javascript:S4790');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4790";
        return example;
    }
}