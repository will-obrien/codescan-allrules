// This component is generated to trigger the VF/Lightning rule: cs-vf:no-eq-null
import { LightningElement } from 'lwc';

export default class noeqnullTrigger extends LightningElement {
    // Rule: disallow `null` comparisons without type-checking operators
    connectedCallback() {
        // This component triggers: cs-vf:no-eq-null
        console.log('Triggering VF/Lightning rule: cs-vf:no-eq-null');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-eq-null";
        return example;
    }
}