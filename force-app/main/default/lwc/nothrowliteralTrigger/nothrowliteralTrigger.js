// This component is generated to trigger the VF/Lightning rule: cs-vf:no-throw-literal
import { LightningElement } from 'lwc';

export default class nothrowliteralTrigger extends LightningElement {
    // Rule: disallow throwing literals as exceptions
    connectedCallback() {
        // This component triggers: cs-vf:no-throw-literal
        console.log('Triggering VF/Lightning rule: cs-vf:no-throw-literal');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-throw-literal";
        return example;
    }
}