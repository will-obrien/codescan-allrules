// This component is generated to trigger the SonarJS rule: javascript:S5868
import { LightningElement } from 'lwc';

export default class s5868Trigger extends LightningElement {
    // Rule: Unicode Grapheme Clusters should be avoided inside regex character classes
    connectedCallback() {
        // This component triggers: javascript:S5868
        console.log('Triggering SonarJS rule: javascript:S5868');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5868";
        return example;
    }

    // Antipattern for S5868: Regular expressions using Unicode character classes or property escapes should enable the unicode flag
    badUnicodeRegex() {
        let pattern = /\p{Alpha}/; // BAD: missing 'u' flag
        return pattern;
    }
}