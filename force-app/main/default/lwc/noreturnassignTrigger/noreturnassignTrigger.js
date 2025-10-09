// This component is generated to trigger the rule: cs-js:no-return-assign
import { LightningElement } from 'lwc';

export default class noreturnassignTrigger extends LightningElement {
    // Rule: disallow assignment operators in `return` statements
    connectedCallback() {
        // This component triggers: cs-js:no-return-assign
        console.log('Triggering rule: cs-js:no-return-assign');
        
        this.testReturnAssignments();
    }
    
    testReturnAssignments() {
        let foo, bar = 2;
        
        // Antipattern 1: Assignment in return statement
        function doSomething() {
            return foo = bar + 2; // Violation: assignment in return
        }
        
        // Antipattern 2: Compound assignment in return
        function doSomethingElse() {
            return foo += 2; // Violation: compound assignment in return
        }
        
        // Antipattern 3: Multiple assignments in return
        function multipleAssign() {
            return foo = bar = 5; // Violation: multiple assignments
        }
        
        // Antipattern 4: Assignment with ternary
        function ternaryAssign(condition) {
            return condition ? foo = 1 : bar = 2; // Violation
        }
        
        return doSomething();
    }
}