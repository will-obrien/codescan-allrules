// This component is generated to trigger the VF/Lightning rule: cs-vf:no-irregular-whitespace
import { LightningElement } from 'lwc';

export default class noirregularwhitespaceTrigger extends LightningElement {
    // Rule: disallow irregular whitespace outside of strings and comments
    connectedCallback() {
        // This component triggers: cs-vf:no-irregular-whitespace
        console.log('Triggering VF/Lightning rule: cs-vf:no-irregular-whitespace');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-irregular-whitespace";
        return example;
    }
}