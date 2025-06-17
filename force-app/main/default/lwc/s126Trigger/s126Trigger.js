// This component is generated to trigger the SonarJS rule: javascript:S126
import { LightningElement } from 'lwc';

export default class s126Trigger extends LightningElement {
    // Rule: "if ... else if" constructs should end with "else" clauses
    connectedCallback() {
        // This component triggers: javascript:S126
        console.log('Triggering SonarJS rule: javascript:S126');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S126";
        return example;
    }
}