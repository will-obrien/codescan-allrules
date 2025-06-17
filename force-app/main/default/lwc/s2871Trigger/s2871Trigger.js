// This component is generated to trigger the SonarJS rule: javascript:S2871
import { LightningElement } from 'lwc';

export default class s2871Trigger extends LightningElement {
    // Rule: A compare function should be provided when using "Array.prototype.sort()"
    connectedCallback() {
        // This component triggers: javascript:S2871
        console.log('Triggering SonarJS rule: javascript:S2871');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2871";
        return example;
    }
}