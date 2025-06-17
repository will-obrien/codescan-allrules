// This component is generated to trigger the VF/Lightning rule: cs-vf:no-new-wrappers
import { LightningElement } from 'lwc';

export default class nonewwrappersTrigger extends LightningElement {
    // Rule: disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    connectedCallback() {
        // This component triggers: cs-vf:no-new-wrappers
        console.log('Triggering VF/Lightning rule: cs-vf:no-new-wrappers');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-new-wrappers";
        return example;
    }
}