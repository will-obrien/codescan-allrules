// This component is generated to trigger the SonarJS rule: javascript:S6268
import { LightningElement } from 'lwc';

export default class s6268Trigger extends LightningElement {
    // Rule: Disabling Angular built-in sanitization is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S6268
        console.log('Triggering SonarJS rule: javascript:S6268');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S6268";
        return example;
    }
}