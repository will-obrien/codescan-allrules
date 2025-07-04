// This component is generated to trigger the SonarJS rule: javascript:S1529
import { LightningElement } from 'lwc';

export default class s1529Trigger extends LightningElement {
    // Rule: Bitwise operators should not be used in boolean contexts
    connectedCallback() {
        // This component triggers: javascript:S1529
        // Noncompliant: bitwise operator used in boolean context
        let a = 1, b = 2;
        if (a & b) { // Noncompliant
            // ...
        }
        console.log('Triggering SonarJS rule: javascript:S1529');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1529";
        return example;
    }
}