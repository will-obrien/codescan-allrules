// This component is generated to trigger the SonarJS rule: javascript:S2138
import { LightningElement } from 'lwc';

export default class s2138Trigger extends LightningElement {
    // Rule: "undefined" should not be assigned
    connectedCallback() {
        // This component triggers: javascript:S2138
        console.log('Triggering SonarJS rule: javascript:S2138');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2138";
        return example;
    }
}