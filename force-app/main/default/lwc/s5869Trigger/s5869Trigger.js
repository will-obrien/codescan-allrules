// This component is generated to trigger the SonarJS rule: javascript:S5869
import { LightningElement } from 'lwc';

export default class s5869Trigger extends LightningElement {
    // Rule: Character classes in regular expressions should not contain the same character twice
    connectedCallback() {
        // This component triggers: javascript:S5869
        console.log('Triggering SonarJS rule: javascript:S5869');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5869";
        return example;
    }

    // Antipattern for S5869: Character classes in regular expressions should not contain the same character twice
    badDuplicateCharClass() {
        let pattern = /[0-99]/; // BAD: duplicate characters in class
        return pattern;
    }
}