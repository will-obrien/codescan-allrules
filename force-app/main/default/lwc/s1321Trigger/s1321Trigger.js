// This component is generated to trigger the SonarJS rule: javascript:S1321
import { LightningElement } from 'lwc';

export default class s1321Trigger extends LightningElement {
    // Rule: "with" statements should not be used
    connectedCallback() {
        // This component triggers: javascript:S1321
        console.log('Triggering SonarJS rule: javascript:S1321');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1321";
        return example;
    }

    // Antipattern for S1321: "with" statements should not be used
    connectedCallback() {
        let foo = { y: 1 };
        // BAD: Use of with statement (not allowed in strict mode, but shown for antipattern)
        // with (foo) {
        //     y = 4;
        // }
    }
}