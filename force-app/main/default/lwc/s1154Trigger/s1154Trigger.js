// This component is generated to trigger the SonarJS rule: javascript:S1154
import { LightningElement } from 'lwc';

export default class s1154Trigger extends LightningElement {
    // Rule: Results of operations on strings should not be ignored
    connectedCallback() {
        // This component triggers: javascript:S1154
        console.log('Triggering SonarJS rule: javascript:S1154');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1154";
        return example;
    }
}