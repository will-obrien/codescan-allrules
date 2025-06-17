// This component is generated to trigger the SonarJS rule: javascript:S124
import { LightningElement } from 'lwc';

export default class s124Trigger extends LightningElement {
    // Rule: Track comments matching a regular expression
    connectedCallback() {
        // This component triggers: javascript:S124
        console.log('Triggering SonarJS rule: javascript:S124');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S124";
        return example;
    }
}