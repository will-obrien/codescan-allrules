// This component is generated to trigger the VF/Lightning rule: cs-vf:no-param-reassign
import { LightningElement } from 'lwc';

export default class noparamreassignTrigger extends LightningElement {
    // Rule: disallow reassigning `function` parameters
    connectedCallback() {
        // This component triggers: cs-vf:no-param-reassign
        console.log('Triggering VF/Lightning rule: cs-vf:no-param-reassign');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-param-reassign";
        return example;
    }
}