// This component is generated to trigger the SonarJS rule: javascript:S2970
import { LightningElement } from 'lwc';

export default class s2970Trigger extends LightningElement {
    // Rule: Assertions should be complete
    connectedCallback() {
        // This component triggers: javascript:S2970
        console.log('Triggering SonarJS rule: javascript:S2970');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2970";
        return example;
    }

    badIncompleteAssertion() {
        const assert = require('chai').assert;
        const expect = require('chai').expect;
        const value = 42;
        assert.fail;  // BAD: not called
        expect(1 == 1);  // BAD: not followed by assertion method
        expect(value.toString).to.throw;  // BAD: not called
    }
}