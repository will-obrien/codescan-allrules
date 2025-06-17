// This component is generated to trigger the VF/Lightning rule: cs-vf:no-extra-bind
import { LightningElement } from 'lwc';

export default class noextrabindTrigger extends LightningElement {
    // Rule: disallow unnecessary calls to `.bind()`
    connectedCallback() {
        // This component triggers: cs-vf:no-extra-bind
        console.log('Triggering VF/Lightning rule: cs-vf:no-extra-bind');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-extra-bind";
        return example;
    }
}