// This component is generated to trigger the SonarJS rule: javascript:S4624
import { LightningElement } from 'lwc';

export default class s4624Trigger extends LightningElement {
    // Rule: Template literals should not be nested
    connectedCallback() {
        // This component triggers: javascript:S4624
        console.log('Triggering SonarJS rule: javascript:S4624');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4624";
        return example;
    }
}