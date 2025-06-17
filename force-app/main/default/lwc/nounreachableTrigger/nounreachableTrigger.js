// This component is generated to trigger the VF/Lightning rule: cs-vf:no-unreachable
import { LightningElement } from 'lwc';

export default class nounreachableTrigger extends LightningElement {
    // Rule: disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    connectedCallback() {
        // This component triggers: cs-vf:no-unreachable
        console.log('Triggering VF/Lightning rule: cs-vf:no-unreachable');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-unreachable";
        return example;
    }
}