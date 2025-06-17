// This component is generated to trigger the SonarJS rule: javascript:S128
import { LightningElement } from 'lwc';

export default class s128Trigger extends LightningElement {
    // Rule: Switch cases should end with an unconditional "break" statement
    connectedCallback() {
        // This component triggers: javascript:S128
        console.log('Triggering SonarJS rule: javascript:S128');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S128";
        return example;
    }
}