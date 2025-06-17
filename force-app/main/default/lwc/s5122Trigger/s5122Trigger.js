// This component is generated to trigger the SonarJS rule: javascript:S5122
import { LightningElement } from 'lwc';

export default class s5122Trigger extends LightningElement {
    // Rule: Having a permissive Cross-Origin Resource Sharing policy is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5122
        console.log('Triggering SonarJS rule: javascript:S5122');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5122";
        return example;
    }
}