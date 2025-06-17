// This component is generated to trigger the SonarJS rule: javascript:S905
import { LightningElement } from 'lwc';

export default class s905Trigger extends LightningElement {
    // Rule: Non-empty statements should change control flow or have at least one side-effect
    connectedCallback() {
        // This component triggers: javascript:S905
        console.log('Triggering SonarJS rule: javascript:S905');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S905";
        return example;
    }
}