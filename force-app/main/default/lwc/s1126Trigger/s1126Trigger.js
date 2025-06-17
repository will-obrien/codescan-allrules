// This component is generated to trigger the SonarJS rule: javascript:S1126
import { LightningElement } from 'lwc';

export default class s1126Trigger extends LightningElement {
    // Rule: Return of boolean expressions should not be wrapped into an "if-then-else" statement
    connectedCallback() {
        // This component triggers: javascript:S1126
        console.log('Triggering SonarJS rule: javascript:S1126');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1126";
        return example;
    }
}