// This component is generated to trigger the VF/Lightning rule: cs-vf:no-catch-shadow
import { LightningElement } from 'lwc';

export default class nocatchshadowTrigger extends LightningElement {
    // Rule: disallow `catch` clause parameters from shadowing variables in the outer scope
    connectedCallback() {
        // This component triggers: cs-vf:no-catch-shadow
        console.log('Triggering VF/Lightning rule: cs-vf:no-catch-shadow');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-catch-shadow";
        return example;
    }
}