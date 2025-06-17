// This component is generated to trigger the SonarJS rule: javascript:S1764
import { LightningElement } from 'lwc';

export default class s1764Trigger extends LightningElement {
    // Rule: Identical expressions should not be used on both sides of a binary operator
    connectedCallback() {
        // This component triggers: javascript:S1764
        console.log('Triggering SonarJS rule: javascript:S1764');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1764";
        return example;
    }
}