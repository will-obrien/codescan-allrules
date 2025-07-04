// This component is generated to trigger the SonarJS rule: javascript:S6019
import { LightningElement } from 'lwc';

export default class s6019Trigger extends LightningElement {
    // Rule: Reluctant quantifiers in regular expressions should be followed by an expression that can't match the empty string
    connectedCallback() {
        // This component triggers: javascript:S6019
        console.log('Triggering SonarJS rule: javascript:S6019');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S6019";
        return example;
    }

    // Antipattern for S6019: Reluctant quantifiers in regular expressions should be followed by an expression that can't match the empty string
    badReluctantQuantifier() {
        let pattern = /^.*?$/; // BAD: reluctant quantifier followed by end anchor
        return pattern;
    }
}