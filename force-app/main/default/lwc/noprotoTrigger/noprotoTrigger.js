// This component is generated to trigger the VF/Lightning rule: cs-vf:no-proto
import { LightningElement } from 'lwc';

export default class noprotoTrigger extends LightningElement {
    // Rule: disallow the use of the `__proto__` property
    connectedCallback() {
        // This component triggers: cs-vf:no-proto
        console.log('Triggering VF/Lightning rule: cs-vf:no-proto');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-proto";
        return example;
    }
}