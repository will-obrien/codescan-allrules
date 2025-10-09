// This component is generated to trigger the rule: cs-js:no-api-reassignments
import { LightningElement, api } from 'lwc';

export default class noapireassignmentsTrigger extends LightningElement {
    // Rule: disallow reassigning API properties
    @api publicProperty = 'initial value';
    @api anotherApiProperty;
    
    connectedCallback() {
        // This component triggers: cs-js:no-api-reassignments
        console.log('Triggering rule: cs-js:no-api-reassignments');
        
        // Antipattern 1: Reassigning @api property directly
        this.publicProperty = 'reassigned value'; // Violation: reassigning @api property
        
        // Antipattern 2: Reassigning another @api property
        this.anotherApiProperty = 'new value'; // Violation: reassigning @api property
        
        // Antipattern 3: Reassigning @api property in method
        this.handleReassignment();
        
        // Antipattern 4: Conditional reassignment of @api property
        if (this.publicProperty) {
            this.publicProperty = 'conditionally reassigned'; // Violation
        }
        
        // Antipattern 5: Reassigning @api property in loop
        for (let i = 0; i < 3; i++) {
            this.anotherApiProperty = `value ${i}`; // Violation
        }
    }
    
    handleReassignment() {
        // Antipattern 6: Method that reassigns @api property
        this.publicProperty = 'reassigned in method'; // Violation
        
        // Antipattern 7: Multiple reassignments
        this.anotherApiProperty = 'first reassignment'; // Violation
        this.anotherApiProperty = 'second reassignment'; // Violation
    }
    
    handleClick() {
        // Antipattern 8: Event handler reassigning @api property
        this.publicProperty = 'reassigned in event handler'; // Violation
    }
}
