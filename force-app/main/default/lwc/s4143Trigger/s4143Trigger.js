// This component is generated to trigger the SonarJS rule: javascript:S4143
import { LightningElement } from 'lwc';

export default class s4143Trigger extends LightningElement {
    // Rule: Collection elements should not be replaced unconditionally
    connectedCallback() {
        // This component triggers: javascript:S4143
        console.log('Triggering SonarJS rule: javascript:S4143');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4143";
        return example;
    }
}