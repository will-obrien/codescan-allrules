// This component is generated to trigger the SonarJS rule: javascript:S2189
import { LightningElement } from 'lwc';

export default class s2189Trigger extends LightningElement {
    // Rule: Loops should not be infinite
    connectedCallback() {
        // This component triggers: javascript:S2189
        console.log('Triggering SonarJS rule: javascript:S2189');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2189";
        return example;
    }
}