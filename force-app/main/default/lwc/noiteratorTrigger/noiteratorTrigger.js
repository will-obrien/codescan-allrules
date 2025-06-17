// This component is generated to trigger the VF/Lightning rule: cs-vf:no-iterator
import { LightningElement } from 'lwc';

export default class noiteratorTrigger extends LightningElement {
    // Rule: disallow the use of the `__iterator__` property
    connectedCallback() {
        // This component triggers: cs-vf:no-iterator
        console.log('Triggering VF/Lightning rule: cs-vf:no-iterator');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-iterator";
        return example;
    }
}