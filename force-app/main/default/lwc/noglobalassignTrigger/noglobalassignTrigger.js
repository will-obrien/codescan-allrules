// This component is generated to trigger the rule: cs-js:no-global-assign
import { LightningElement } from 'lwc';

export default class noglobalassignTrigger extends LightningElement {
    // Rule: disallow assignment to native objects
    connectedCallback() {
        // This component triggers: cs-js:no-global-assign
        console.log('Triggering rule: cs-js:no-global-assign');
    }
}