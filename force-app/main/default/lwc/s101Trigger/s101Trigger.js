// This component is generated to trigger the SonarJS rule: javascript:S101
import { LightningElement } from 'lwc';

export default class s101Trigger extends LightningElement {
    // Rule: Class names should comply with a naming convention
    connectedCallback() {
        // This component triggers: javascript:S101
        console.log('Triggering SonarJS rule: javascript:S101');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S101";
        return example;
    }
}