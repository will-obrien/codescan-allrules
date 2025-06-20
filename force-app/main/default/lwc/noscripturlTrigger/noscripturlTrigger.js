// This component is generated to trigger the rule: cs-js:no-script-url
import { LightningElement } from 'lwc';

export default class noscripturlTrigger extends LightningElement {
    // Rule: disallow `javascript:` urls
    connectedCallback() {
        // This component triggers: cs-js:no-script-url
        console.log('Triggering rule: cs-js:no-script-url');
    }
}