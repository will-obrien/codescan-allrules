// This component is generated to trigger the rule: cs-js:no-label-var
import { LightningElement } from 'lwc';

export default class nolabelvarTrigger extends LightningElement {
    // Rule: disallow labels that share a name with a variable
    connectedCallback() {
        // This component triggers: cs-js:no-label-var
        console.log('Triggering rule: cs-js:no-label-var');
    }
}