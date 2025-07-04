// This component is generated to trigger the SonarJS rule: javascript:S2699
import { LightningElement } from 'lwc';

export default class s2699Trigger extends LightningElement {
    // Rule: Tests should include assertions
    connectedCallback() {
        // This component triggers: javascript:S2699
        // Noncompliant: test with no assertion
        /*
        describe("No assertion", function() {
            it("doesn't test anything", function() { // Noncompliant
                const str = "";
            });
        });
        */
        console.log('Triggering SonarJS rule: javascript:S2699');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2699";
        return example;
    }

    // Antipattern for S2699: Tests should include assertions
    badTestNoAssertion() {
        const expect = require('chai').expect;
        describe("No assertion", function() {
            it("doesn't test anything", function() { // BAD: no assertion
                const str = "";
            });
        });
    }
}