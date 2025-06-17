// This component is generated to trigger the SonarJS rule: javascript:S2870
import { LightningElement } from 'lwc';

export default class s2870Trigger extends LightningElement {
    // Rule: "delete" should not be used on arrays
    connectedCallback() {
        // This component triggers: javascript:S2870
        console.log('Triggering SonarJS rule: javascript:S2870');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2870";
        return example;
    }
}