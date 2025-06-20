// This component is generated to trigger the rule: cs-js:unsecure-js-dependency
import { LightningElement } from 'lwc';

export default class unsecurejsdependencyTrigger extends LightningElement {
    // Rule: Auditing js dependencies for security vulnerabilities
    connectedCallback() {
        // This component triggers: cs-js:unsecure-js-dependency
        console.log('Triggering rule: cs-js:unsecure-js-dependency');
    }
}