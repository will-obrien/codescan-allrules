// This component is generated to trigger the VF/Lightning rule: cs-vf:no-shadow-restricted-names
import { LightningElement } from 'lwc';

export default class noshadowrestrictednamesTrigger extends LightningElement {
    // Rule: disallow identifiers from shadowing restricted names
    connectedCallback() {
        // This component triggers: cs-vf:no-shadow-restricted-names
        console.log('Triggering VF/Lightning rule: cs-vf:no-shadow-restricted-names');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-shadow-restricted-names";
        return example;
    }
}