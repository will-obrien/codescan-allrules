// This component is generated to trigger the VF/Lightning rule: cs-vf:no-obj-calls
import { LightningElement } from 'lwc';

export default class noobjcallsTrigger extends LightningElement {
    // Rule: disallow calling global object properties as functions
    connectedCallback() {
        // This component triggers: cs-vf:no-obj-calls
        console.log('Triggering VF/Lightning rule: cs-vf:no-obj-calls');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-obj-calls";
        return example;
    }
}