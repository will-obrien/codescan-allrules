// This component is generated to trigger the VF/Lightning rule: cs-vf:no-unused-expressions
import { LightningElement } from 'lwc';

export default class nounusedexpressionsTrigger extends LightningElement {
    // Rule: disallow unused expressions
    connectedCallback() {
        // This component triggers: cs-vf:no-unused-expressions
        console.log('Triggering VF/Lightning rule: cs-vf:no-unused-expressions');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-unused-expressions";
        return example;
    }
}