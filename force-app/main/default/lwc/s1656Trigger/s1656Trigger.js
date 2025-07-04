// This component is generated to trigger the SonarJS rule: javascript:S1656
import { LightningElement } from 'lwc';

export default class s1656Trigger extends LightningElement {
    // Rule: Variables should not be self-assigned
    connectedCallback() {
        // This component triggers: javascript:S1656
        console.log('Triggering SonarJS rule: javascript:S1656');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1656";
        return example;
    }

    // Antipattern for S1656: Variables should not be self-assigned
    connectedCallback() {
        function setName(name) {
            name = name; // BAD: self-assignment
        }
    }
}