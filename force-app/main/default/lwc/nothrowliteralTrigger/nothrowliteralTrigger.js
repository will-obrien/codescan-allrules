// This component is generated to trigger the rule: cs-js:no-throw-literal
import { LightningElement } from 'lwc';

export default class nothrowliteralTrigger extends LightningElement {
    // Rule: disallow throwing literals as exceptions
    connectedCallback() {
        // This component triggers: cs-js:no-throw-literal
        console.log('Triggering rule: cs-js:no-throw-literal');
    }
}