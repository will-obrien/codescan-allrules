// This component is generated to trigger the VF/Lightning rule: cs-vf:no-else-return
import { LightningElement } from 'lwc';

export default class noelsereturnTrigger extends LightningElement {
    // Rule: disallow `else` blocks after `return` statements in `if` statements
    connectedCallback() {
        // This component triggers: cs-vf:no-else-return
        console.log('Triggering VF/Lightning rule: cs-vf:no-else-return');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-else-return";
        return example;
    }
}