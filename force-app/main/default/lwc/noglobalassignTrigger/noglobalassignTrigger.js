// This component is generated to trigger the VF/Lightning rule: cs-vf:no-global-assign
import { LightningElement } from 'lwc';

export default class noglobalassignTrigger extends LightningElement {
    // Rule: disallow assignment to native objects
    connectedCallback() {
        // This component triggers: cs-vf:no-global-assign
        console.log('Triggering VF/Lightning rule: cs-vf:no-global-assign');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-global-assign";
        return example;
    }
}