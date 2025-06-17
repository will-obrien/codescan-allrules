// This component is generated to trigger the VF/Lightning rule: cs-vf:no-new-object
import { LightningElement } from 'lwc';

export default class nonewobjectTrigger extends LightningElement {
    // Rule: disallow `Object` constructors
    connectedCallback() {
        // This component triggers: cs-vf:no-new-object
        console.log('Triggering VF/Lightning rule: cs-vf:no-new-object');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-new-object";
        return example;
    }
}