// This component is generated to trigger the SonarJS rule: javascript:S100
import { LightningElement } from 'lwc';

export default class s100Trigger extends LightningElement {
    // Rule: Function and method names should comply with a naming convention
    connectedCallback() {
        // This component triggers: javascript:S100
        console.log('Triggering SonarJS rule: javascript:S100');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S100";
        return example;
    }
}