// This component is generated to trigger the VF/Lightning rule: cs-vf:no-undef
import { LightningElement } from 'lwc';

export default class noundefTrigger extends LightningElement {
    // Rule: disallow the use of undeclared variables unless mentioned in `/*global */` comments
    connectedCallback() {
        // This component triggers: cs-vf:no-undef
        console.log('Triggering VF/Lightning rule: cs-vf:no-undef');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-undef";
        return example;
    }
}