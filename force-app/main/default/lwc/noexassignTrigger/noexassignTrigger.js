// This component is generated to trigger the rule: cs-js:no-ex-assign
import { LightningElement } from 'lwc';

export default class noexassignTrigger extends LightningElement {
    // Rule: disallow reassigning exceptions in `catch` clauses
    connectedCallback() {
        // This component triggers: cs-js:no-ex-assign
        console.log('Triggering rule: cs-js:no-ex-assign');
    }
}