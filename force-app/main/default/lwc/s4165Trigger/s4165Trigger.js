// This component is generated to trigger the SonarJS rule: javascript:S4165
import { LightningElement } from 'lwc';

export default class s4165Trigger extends LightningElement {
    // Rule: Assignments should not be redundant
    connectedCallback() {
        // This component triggers: javascript:S4165
        console.log('Triggering SonarJS rule: javascript:S4165');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4165";
        return example;
    }

    // Antipattern for S4165: Assignments should not be redundant
    badRedundantAssignment() {
        let a = 1;
        let b = a;
        let c = b;
        b = c; // BAD: redundant assignment
        return b;
    }
}