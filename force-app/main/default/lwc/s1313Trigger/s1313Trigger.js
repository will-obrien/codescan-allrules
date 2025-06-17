// This component is generated to trigger the SonarJS rule: javascript:S1313
import { LightningElement } from 'lwc';

export default class s1313Trigger extends LightningElement {
    // Rule: Using hardcoded IP addresses is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S1313
        console.log('Triggering SonarJS rule: javascript:S1313');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1313";
        return example;
    }
}