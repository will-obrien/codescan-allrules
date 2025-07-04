// This component is generated to trigger the SonarJS rule: javascript:S5863
import { LightningElement } from 'lwc';

export default class s5863Trigger extends LightningElement {
    // Rule: Assertions should not be given twice the same argument
    connectedCallback() {
        // This component triggers: javascript:S5863
        console.log('Triggering SonarJS rule: javascript:S5863');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5863";
        return example;
    }

    // Antipattern for S5863: Assertions should not be given twice the same argument
    badDuplicateAssertion() {
        const assert = require('chai').assert;
        const actual = (1).toString();
        assert.equal(actual, actual);  // BAD: same argument twice
    }
}