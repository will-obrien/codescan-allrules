// This component is generated to trigger the SonarJS rule: javascript:S5443
import { LightningElement } from 'lwc';

export default class s5443Trigger extends LightningElement {
    // Rule: Using publicly writable directories is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5443
        console.log('Triggering SonarJS rule: javascript:S5443');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5443";
        return example;
    }
}