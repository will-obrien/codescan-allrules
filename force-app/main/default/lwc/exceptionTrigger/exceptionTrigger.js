// This component is generated to trigger the VF/Lightning rule: cs-vf:exception
import { LightningElement } from 'lwc';

export default class exceptionTrigger extends LightningElement {
    // Rule: Tracks CodeScan Eslint Exceptions
    connectedCallback() {
        // This component triggers: cs-vf:exception
        console.log('Triggering VF/Lightning rule: cs-vf:exception');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:exception";
        return example;
    }
}