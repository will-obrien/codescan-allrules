// This component is generated to trigger the rule: cs-js:no-proto
import { LightningElement } from 'lwc';

export default class noprotoTrigger extends LightningElement {
    // Rule: disallow the use of the `__proto__` property
    connectedCallback() {
        // This component triggers: cs-js:no-proto
        console.log('Triggering rule: cs-js:no-proto');
    }
}