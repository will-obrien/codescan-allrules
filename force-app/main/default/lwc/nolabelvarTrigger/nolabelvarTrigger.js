// This component is generated to trigger the VF/Lightning rule: cs-vf:no-label-var
import { LightningElement } from 'lwc';

export default class nolabelvarTrigger extends LightningElement {
    // Rule: disallow labels that share a name with a variable
    connectedCallback() {
        // This component triggers: cs-vf:no-label-var
        console.log('Triggering VF/Lightning rule: cs-vf:no-label-var');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-label-var";
        return example;
    }
}