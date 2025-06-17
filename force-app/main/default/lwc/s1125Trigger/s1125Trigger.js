// This component is generated to trigger the SonarJS rule: javascript:S1125
import { LightningElement } from 'lwc';

export default class s1125Trigger extends LightningElement {
    // Rule: Boolean literals should not be used in comparisons
    connectedCallback() {
        // This component triggers: javascript:S1125
        console.log('Triggering SonarJS rule: javascript:S1125');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1125";
        return example;
    }
}