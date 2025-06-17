// This component is generated to trigger the VF/Lightning rule: cs-vf:no-extra-boolean-cast
import { LightningElement } from 'lwc';

export default class noextrabooleancastTrigger extends LightningElement {
    // Rule: disallow unnecessary boolean casts
    connectedCallback() {
        // This component triggers: cs-vf:no-extra-boolean-cast
        console.log('Triggering VF/Lightning rule: cs-vf:no-extra-boolean-cast');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-extra-boolean-cast";
        return example;
    }
}