// This component is generated to trigger the SonarJS rule: javascript:S1321
import { LightningElement } from 'lwc';

export default class s1321Trigger extends LightningElement {
    // Rule: "with" statements should not be used
    connectedCallback() {
        // This component triggers: javascript:S1321
        console.log('Triggering SonarJS rule: javascript:S1321');
        // Noncompliant: Use of with statement (not allowed in strict mode, but shown for antipattern)
        let foo = { y: 1 };
        // with (foo) {
        //     y = 4;
        // }
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1321";
        return example;
    }
}