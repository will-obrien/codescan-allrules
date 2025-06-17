// This component is generated to trigger the VF/Lightning rule: cs-vf:no-invalid-regexp
import { LightningElement } from 'lwc';

export default class noinvalidregexpTrigger extends LightningElement {
    // Rule: disallow invalid regular expression strings in `RegExp` constructors
    connectedCallback() {
        // This component triggers: cs-vf:no-invalid-regexp
        console.log('Triggering VF/Lightning rule: cs-vf:no-invalid-regexp');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-invalid-regexp";
        return example;
    }
}