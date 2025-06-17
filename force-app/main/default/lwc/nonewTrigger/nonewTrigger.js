// This component is generated to trigger the VF/Lightning rule: cs-vf:no-new
import { LightningElement } from 'lwc';

export default class nonewTrigger extends LightningElement {
    // Rule: disallow `new` operators outside of assignments or comparisons
    connectedCallback() {
        // This component triggers: cs-vf:no-new
        console.log('Triggering VF/Lightning rule: cs-vf:no-new');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-new";
        return example;
    }
}