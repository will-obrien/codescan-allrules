// This component is generated to trigger the VF/Lightning rule: cs-vf:valid-typeof
import { LightningElement } from 'lwc';

export default class validtypeofTrigger extends LightningElement {
    // Rule: enforce comparing `typeof` expressions against valid strings
    connectedCallback() {
        // This component triggers: cs-vf:valid-typeof
        console.log('Triggering VF/Lightning rule: cs-vf:valid-typeof');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:valid-typeof";
        return example;
    }
}