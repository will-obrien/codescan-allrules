// This component is generated to trigger the SonarJS rule: javascript:S6035
import { LightningElement } from 'lwc';

export default class s6035Trigger extends LightningElement {
    // Rule: Single-character alternations in regular expressions should be replaced with character classes
    connectedCallback() {
        // This component triggers: javascript:S6035
        console.log('Triggering SonarJS rule: javascript:S6035');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S6035";
        return example;
    }

    // Antipattern for S6035: Single-character alternations in regular expressions should be replaced with character classes
    badRegexAlternation() {
        let pattern = /a|b|c/; // BAD: should use /[abc]/
        return pattern;
    }
}