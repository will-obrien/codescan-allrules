// This component is generated to trigger the SonarJS rule: javascript:S1219
import { LightningElement } from 'lwc';

export default class s1219Trigger extends LightningElement {
    // Rule: "switch" statements should not contain non-case labels
    connectedCallback() {
        // This component triggers: javascript:S1219
        console.log('Triggering SonarJS rule: javascript:S1219');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1219";
        return example;
    }
}