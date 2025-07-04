// This component is generated to trigger the SonarJS rule: javascript:S5860
import { LightningElement } from 'lwc';

export default class s5860Trigger extends LightningElement {
    // Rule: Names of regular expressions named groups should be used
    connectedCallback() {
        // This component triggers: javascript:S5860
        console.log('Triggering SonarJS rule: javascript:S5860');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5860";
        return example;
    }

    // Antipattern for S5860: Names of regular expressions named groups should be used
    badNamedGroups() {
        const date = '01/02';
        const datePattern = /(?<month>[0-9]{2})\/(?<year>[0-9]{2})/;
        const dateMatched = date.match(datePattern);
        if (dateMatched !== null) {
            // BAD: using numbers instead of names
            this.checkValidity(dateMatched[1], dateMatched[2]);
            this.checkValidity(dateMatched.groups.day); // BAD: group does not exist
        }
        return dateMatched;
    }
    checkValidity() {}
}