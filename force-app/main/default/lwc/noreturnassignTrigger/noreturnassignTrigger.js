// This component is generated to trigger the rule: cs-js:no-return-assign
import { LightningElement } from 'lwc';

export default class noreturnassignTrigger extends LightningElement {
    // Rule: disallow assignment operators in `return` statements
    connectedCallback() {
        // This component triggers: cs-js:no-return-assign
        console.log('Triggering rule: cs-js:no-return-assign');
    }
}