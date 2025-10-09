// This component is generated to trigger the rule: cs-js:no-invalid-regexp
import { LightningElement } from 'lwc';

export default class noinvalidregexpTrigger extends LightningElement {
    // Rule: disallow invalid regular expression strings in `RegExp` constructors
    connectedCallback() {
        // This component triggers: cs-js:no-invalid-regexp
        console.log('Triggering rule: cs-js:no-invalid-regexp');
    }
}