// This component is generated to trigger the VF/Lightning rule: cs-vf:no-constant-condition
import { LightningElement } from 'lwc';

export default class noconstantconditionTrigger extends LightningElement {
    // Rule: disallow constant expressions in conditions
    connectedCallback() {
        // This component triggers: cs-vf:no-constant-condition
        console.log('Triggering VF/Lightning rule: cs-vf:no-constant-condition');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-constant-condition";
        return example;
    }
}