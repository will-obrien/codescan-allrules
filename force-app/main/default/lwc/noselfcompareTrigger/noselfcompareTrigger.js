// This component is generated to trigger the rule: cs-js:no-self-compare
import { LightningElement } from 'lwc';

export default class noselfcompareTrigger extends LightningElement {
    // Rule: disallow comparisons where both sides are exactly the same
    connectedCallback() {
        // This component triggers: cs-js:no-self-compare
        console.log('Triggering rule: cs-js:no-self-compare');
    }
}