// This component is generated to trigger the rule: cs-js:no-ex-assign
import { LightningElement } from 'lwc';

export default class noexassignTrigger extends LightningElement {
    // Rule: disallow reassigning exceptions in `catch` clauses
    connectedCallback() {
        // This component triggers: cs-js:no-ex-assign
        console.log('Triggering rule: cs-js:no-ex-assign');
        
        // Antipattern 1: Reassigning exception parameter
        try {
            // some code that might throw
            throw new Error('test error');
        } catch (e) {
            e = 10; // Violation: reassigning exception parameter
        }
        
        // Antipattern 2: Modifying exception parameter
        try {
            // some code
            JSON.parse('invalid json');
        } catch (error) {
            error = new Error('different error'); // Violation
            console.log(error);
        }
        
        // Antipattern 3: Using assignment operators on exception
        try {
            // some operation
            undefined.property;
        } catch (ex) {
            ex += ' modified'; // Violation: modifying exception
        }
    }
}