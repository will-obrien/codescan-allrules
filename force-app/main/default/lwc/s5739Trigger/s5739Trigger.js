// This component is generated to trigger the SonarJS rule: javascript:S5739
import { LightningElement } from 'lwc';

export default class s5739Trigger extends LightningElement {
    // Rule: Disabling Strict-Transport-Security policy is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5739
        console.log('Triggering SonarJS rule: javascript:S5739');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5739";
        return example;
    }
}