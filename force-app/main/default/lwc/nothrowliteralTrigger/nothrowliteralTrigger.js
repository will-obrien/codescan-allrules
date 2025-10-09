// This component is generated to trigger the rule: cs-js:no-throw-literal
import { LightningElement } from 'lwc';

export default class nothrowliteralTrigger extends LightningElement {
    // Rule: disallow throwing literals as exceptions
    connectedCallback() {
        // This component triggers: cs-js:no-throw-literal
        console.log('Triggering rule: cs-js:no-throw-literal');
        
        this.testThrowLiterals();
    }
    
    testThrowLiterals() {
        try {
            // Antipattern 1: Throwing string literal
            throw "error"; // Violation: throwing string literal
        } catch (e) {
            console.log('Caught string:', e);
        }
        
        try {
            // Antipattern 2: Throwing number literal
            throw 0; // Violation: throwing number literal
        } catch (e) {
            console.log('Caught number:', e);
        }
        
        try {
            // Antipattern 3: Throwing undefined
            throw undefined; // Violation: throwing undefined
        } catch (e) {
            console.log('Caught undefined:', e);
        }
        
        try {
            // Antipattern 4: Throwing null
            throw null; // Violation: throwing null
        } catch (e) {
            console.log('Caught null:', e);
        }
        
        try {
            // Antipattern 5: Throwing concatenated string with Error
            var err = new Error();
            throw "an " + err; // Violation: err is recast to string literal
        } catch (e) {
            console.log('Caught concatenated:', e);
        }
        
        try {
            // Antipattern 6: Throwing template literal with Error
            var err = new Error();
            throw `${err}`; // Violation: template literal
        } catch (e) {
            console.log('Caught template:', e);
        }
    }
}