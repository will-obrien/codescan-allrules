// This component is generated to trigger the rule: cs-js:no-unreachable
import { LightningElement } from 'lwc';

export default class nounreachableTrigger extends LightningElement {
    // Rule: disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    connectedCallback() {
        // This component triggers: cs-js:no-unreachable
        console.log('Triggering rule: cs-js:no-unreachable');
    }
}