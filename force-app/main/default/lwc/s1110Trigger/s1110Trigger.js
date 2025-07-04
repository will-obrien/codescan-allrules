// This component is generated to trigger the SonarJS rule: javascript:S1110
import { LightningElement } from 'lwc';

export default class s1110Trigger extends LightningElement {
    // Rule: Redundant pairs of parentheses should be removed
    connectedCallback() {
        // This component triggers: javascript:S1110
        console.log('Triggering SonarJS rule: javascript:S1110');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1110";
        return example;

        // Noncompliant: redundant pairs of parentheses
        let x = 5;
        let y = 10;
        if (((x + y) > 10)) { // Noncompliant
            console.log('Sum is greater than 10');
        }
        return ((x + 1)); // Noncompliant
    }
}