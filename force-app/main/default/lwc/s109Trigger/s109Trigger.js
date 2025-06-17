// This component is generated to trigger the SonarJS rule: javascript:S109
import { LightningElement } from 'lwc';

export default class s109Trigger extends LightningElement {
    // Rule: Magic numbers should not be used
    connectedCallback() {
        // This component triggers: javascript:S109
        console.log('Triggering SonarJS rule: javascript:S109');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S109";
        return example;
    }
}