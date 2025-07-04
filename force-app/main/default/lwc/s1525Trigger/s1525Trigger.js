// This component is generated to trigger the SonarJS rule: javascript:S1525
import { LightningElement } from 'lwc';

export default class s1525Trigger extends LightningElement {
    // Rule: Debugger statements should not be used
    connectedCallback() {
        // This component triggers: javascript:S1525
        console.log('Triggering SonarJS rule: javascript:S1525');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1525";
        return example;
    }
}

// Antipattern for S1525: Debugger statements should not be used
import { LightningElement } from 'lwc';

export default class s1525Trigger extends LightningElement {
    connectedCallback() {
        for (let i = 1; i < 5; i++) {
            // Print i to the Output window.
            // Wait for user to resume.
            debugger; // BAD: debugger statement
        }
    }
}