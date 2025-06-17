// This component is generated to trigger the VF/Lightning rule: cs-vf:secure-window
import { LightningElement } from 'lwc';

export default class securewindowTrigger extends LightningElement {
    // Rule: validate window global access
    connectedCallback() {
        // This component triggers: cs-vf:secure-window
        console.log('Triggering VF/Lightning rule: cs-vf:secure-window');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:secure-window";
        return example;
    }
}