// This component is generated to trigger the SonarJS rule: javascript:S6326
import { LightningElement } from 'lwc';

export default class s6326Trigger extends LightningElement {
    // Rule: Regular expressions should not contain multiple spaces
    connectedCallback() {
        // This component triggers: javascript:S6326
        console.log('Triggering SonarJS rule: javascript:S6326');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S6326";
        return example;
    }

    // Antipattern for S6326: Regular expressions should not contain multiple spaces
    badMultipleSpacesRegex() {
        let pattern = /Hello,   world!/; // BAD: multiple spaces
        return pattern;
    }
}