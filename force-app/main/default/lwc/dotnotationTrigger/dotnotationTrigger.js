// This component is generated to trigger the VF/Lightning rule: cs-vf:dot-notation
import { LightningElement } from 'lwc';

export default class dotnotationTrigger extends LightningElement {
    // Rule: enforce dot notation
    connectedCallback() {
        // This component triggers: cs-vf:dot-notation
        console.log('Triggering VF/Lightning rule: cs-vf:dot-notation');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:dot-notation";
        return example;
    }
}