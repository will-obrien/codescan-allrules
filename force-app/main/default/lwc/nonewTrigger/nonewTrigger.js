// This component is generated to trigger the rule: cs-js:no-new
import { LightningElement } from 'lwc';

export default class nonewTrigger extends LightningElement {
    // Rule: disallow `new` operators outside of assignments or comparisons
    connectedCallback() {
        // This component triggers: cs-js:no-new
        console.log('Triggering rule: cs-js:no-new');
    }
}