// This component is generated to trigger the rule: cs-js:npm-audit
import { LightningElement } from 'lwc';

export default class npmauditTrigger extends LightningElement {
    // Rule: Auditing npm dependencies for security vulnerabilities
    connectedCallback() {
        // This component triggers: cs-js:npm-audit
        console.log('Triggering rule: cs-js:npm-audit');
    }
}