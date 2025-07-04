// This component is generated to trigger the SonarJS rule: javascript:S5850
import { LightningElement } from 'lwc';

export default class s5850Trigger extends LightningElement {
    // Rule: Alternatives in regular expressions should be grouped when used with anchors
    connectedCallback() {
        // This component triggers: javascript:S5850
        console.log('Triggering SonarJS rule: javascript:S5850');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5850";
        return example;
    }

    // Antipattern for S5850: Alternatives in regular expressions should be grouped when used with anchors
    badRegexAlternatives() {
        let pattern = /^a|b|c$/; // BAD: anchors not grouped
        return pattern;
    }
}