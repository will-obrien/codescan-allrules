// This component is generated to trigger the SonarJS rule: javascript:S1439
import { LightningElement } from 'lwc';

export default class s1439Trigger extends LightningElement {
    // Rule: Only "while", "do", "for" and "switch" statements should be labelled
    connectedCallback() {
        // This component triggers: javascript:S1439
        console.log('Triggering SonarJS rule: javascript:S1439');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1439";
        return example;
    }
}