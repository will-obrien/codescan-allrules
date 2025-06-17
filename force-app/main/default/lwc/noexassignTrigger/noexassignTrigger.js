// This component is generated to trigger the VF/Lightning rule: cs-vf:no-ex-assign
import { LightningElement } from 'lwc';

export default class noexassignTrigger extends LightningElement {
    // Rule: disallow reassigning exceptions in `catch` clauses
    connectedCallback() {
        // This component triggers: cs-vf:no-ex-assign
        console.log('Triggering VF/Lightning rule: cs-vf:no-ex-assign');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-ex-assign";
        return example;
    }
}