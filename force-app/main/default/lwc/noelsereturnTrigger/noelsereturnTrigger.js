// This component is generated to trigger the rule: cs-js:no-else-return
import { LightningElement } from 'lwc';

export default class noelsereturnTrigger extends LightningElement {
    // Rule: disallow `else` blocks after `return` statements in `if` statements
    connectedCallback() {
        // This component triggers: cs-js:no-else-return
        console.log('Triggering rule: cs-js:no-else-return');
    }
}