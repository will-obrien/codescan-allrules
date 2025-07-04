// This component is generated to trigger the SonarJS rule: javascript:S6331
import { LightningElement } from 'lwc';

export default class s6331Trigger extends LightningElement {
    // Rule: Regular expressions should not contain empty groups
    connectedCallback() {
        // This component triggers: javascript:S6331
        console.log('Triggering SonarJS rule: javascript:S6331');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S6331";
        return example;
    }

    // Antipattern for S6331: Regular expressions should not contain empty groups
    badEmptyGroupRegex() {
        let pattern = /foo()/; // BAD: empty group
        return pattern;
    }
}