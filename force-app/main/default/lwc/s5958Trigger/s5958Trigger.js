// This component is generated to trigger the SonarJS rule: javascript:S5958
import { LightningElement } from 'lwc';

export default class s5958Trigger extends LightningElement {
    // Rule: Tests should check which exception is thrown
    connectedCallback() {
        // This component triggers: javascript:S5958
        console.log('Triggering SonarJS rule: javascript:S5958');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5958";
        return example;
    }

    badExceptionTest() {
        const expect = require('chai').expect;
        function funcThrows() { throw new TypeError('What is this type?'); }
        expect(funcThrows).to.throw();  // BAD: does not check specific exception
        expect(funcThrows).to.throw(Error);  // BAD: does not check message
    }
}