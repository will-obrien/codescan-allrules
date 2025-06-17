// This component is generated to trigger the SonarJS rule: javascript:S930
import { LightningElement } from 'lwc';

export default class s930Trigger extends LightningElement {
    // Rule: Function calls should not pass extra arguments
    connectedCallback() {
        // This component triggers: javascript:S930
        console.log('Triggering SonarJS rule: javascript:S930');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S930";
        return example;
    }
}