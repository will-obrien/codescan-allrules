// This component is generated to trigger the rule: cs-js:no-iterator
import { LightningElement } from 'lwc';

export default class noiteratorTrigger extends LightningElement {
    // Rule: disallow the use of the `__iterator__` property
    connectedCallback() {
        // This component triggers: cs-js:no-iterator
        console.log('Triggering rule: cs-js:no-iterator');
    }
}