// This component is generated to trigger the SonarJS rule: javascript:S5757
import { LightningElement } from 'lwc';

export default class s5757Trigger extends LightningElement {
    // Rule: Allowing confidential information to be logged is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5757
        console.log('Triggering SonarJS rule: javascript:S5757');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5757";
        return example;
    }
}