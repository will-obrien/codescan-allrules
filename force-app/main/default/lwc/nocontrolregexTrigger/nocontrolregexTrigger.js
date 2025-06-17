// This component is generated to trigger the VF/Lightning rule: cs-vf:no-control-regex
import { LightningElement } from 'lwc';

export default class nocontrolregexTrigger extends LightningElement {
    // Rule: disallow control characters in regular expressions
    connectedCallback() {
        // This component triggers: cs-vf:no-control-regex
        console.log('Triggering VF/Lightning rule: cs-vf:no-control-regex');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-control-regex";
        return example;
    }
}