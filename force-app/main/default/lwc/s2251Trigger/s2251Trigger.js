// This component is generated to trigger the SonarJS rule: javascript:S2251
import { LightningElement } from 'lwc';

export default class s2251Trigger extends LightningElement {
    // Rule: A "for" loop update clause should move the counter in the right direction
    connectedCallback() {
        // This component triggers: javascript:S2251
        console.log('Triggering SonarJS rule: javascript:S2251');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2251";
        return example;
    }
}