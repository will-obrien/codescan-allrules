// This component is generated to trigger the SonarJS rule: javascript:S4158
import { LightningElement } from 'lwc';

export default class s4158Trigger extends LightningElement {
    // Rule: Empty collections should not be accessed or iterated
    connectedCallback() {
        // This component triggers: javascript:S4158
        console.log('Triggering SonarJS rule: javascript:S4158');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4158";
        return example;
    }
}