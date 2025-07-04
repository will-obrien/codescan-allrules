// This component is generated to trigger the SonarJS rule: javascript:S2681
import { LightningElement } from 'lwc';

export default class s2681Trigger extends LightningElement {
    // Rule: Multiline blocks should be enclosed in curly braces
    connectedCallback() {
        // This component triggers: javascript:S2681
        // Noncompliant: multiline block without curly braces
        if (true)
            console.log('a');
            console.log('b'); // Noncompliant: not in block
        console.log('Triggering SonarJS rule: javascript:S2681');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2681";
        return example;
    }
}