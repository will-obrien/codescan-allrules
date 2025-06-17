// This component is generated to trigger the SonarJS rule: javascript:S2999
import { LightningElement } from 'lwc';

export default class s2999Trigger extends LightningElement {
    // Rule: "new" operators should be used with functions
    connectedCallback() {
        // This component triggers: javascript:S2999
        console.log('Triggering SonarJS rule: javascript:S2999');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2999";
        return example;
    }
}