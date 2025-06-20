// This component is generated to trigger the rule: cs-js:no-sparse-arrays
import { LightningElement } from 'lwc';

export default class nosparsearraysTrigger extends LightningElement {
    // Rule: disallow sparse arrays
    connectedCallback() {
        // This component triggers: cs-js:no-sparse-arrays
        console.log('Triggering rule: cs-js:no-sparse-arrays');
    }
}