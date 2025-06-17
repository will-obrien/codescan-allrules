// This component is generated to trigger the VF/Lightning rule: cs-vf:unsecure-js-dependency
import { LightningElement } from 'lwc';

export default class unsecurejsdependencyTrigger extends LightningElement {
    // Rule: Auditing js dependencies for security vulnerabilities
    connectedCallback() {
        // This component triggers: cs-vf:unsecure-js-dependency
        console.log('Triggering VF/Lightning rule: cs-vf:unsecure-js-dependency');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:unsecure-js-dependency";
        return example;
    }
}