// This component is generated to trigger the SonarJS rule: javascript:S5693
import { LightningElement } from 'lwc';

export default class s5693Trigger extends LightningElement {
    // Rule: Allowing requests with excessive content length is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5693
        console.log('Triggering SonarJS rule: javascript:S5693');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5693";
        return example;
    }
}