// This component is generated to trigger the rule: cs-js:no-eq-null
import { LightningElement } from 'lwc';

export default class noeqnullTrigger extends LightningElement {
    // Rule: disallow `null` comparisons without type-checking operators
    connectedCallback() {
        // This component triggers: cs-js:no-eq-null
        console.log('Triggering rule: cs-js:no-eq-null');
    }
}