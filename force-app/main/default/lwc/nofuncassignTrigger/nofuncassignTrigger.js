// This component is generated to trigger the VF/Lightning rule: cs-vf:no-func-assign
import { LightningElement } from 'lwc';

export default class nofuncassignTrigger extends LightningElement {
    // Rule: disallow reassigning `function` declarations
    connectedCallback() {
        // This component triggers: cs-vf:no-func-assign
        console.log('Triggering VF/Lightning rule: cs-vf:no-func-assign');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-func-assign";
        return example;
    }
}