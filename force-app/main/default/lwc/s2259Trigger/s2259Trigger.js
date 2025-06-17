// This component is generated to trigger the SonarJS rule: javascript:S2259
import { LightningElement } from 'lwc';

export default class s2259Trigger extends LightningElement {
    // Rule: Properties of variables with "null" or "undefined" values should not be accessed
    connectedCallback() {
        // This component triggers: javascript:S2259
        console.log('Triggering SonarJS rule: javascript:S2259');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2259";
        return example;
    }
}