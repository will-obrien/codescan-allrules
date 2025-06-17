// This component is generated to trigger the SonarJS rule: javascript:S2692
import { LightningElement } from 'lwc';

export default class s2692Trigger extends LightningElement {
    // Rule: "indexOf" checks should not be for positive numbers
    connectedCallback() {
        // This component triggers: javascript:S2692
        console.log('Triggering SonarJS rule: javascript:S2692');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2692";
        return example;
    }
}