// This component is generated to trigger the SonarJS rule: javascript:S888
import { LightningElement } from 'lwc';

export default class s888Trigger extends LightningElement {
    // Rule: Equality operators should not be used in "for" loop termination conditions
    connectedCallback() {
        // This component triggers: javascript:S888
        console.log('Triggering SonarJS rule: javascript:S888');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S888";
        return example;
    }
}