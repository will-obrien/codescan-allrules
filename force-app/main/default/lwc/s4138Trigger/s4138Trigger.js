// This component is generated to trigger the SonarJS rule: javascript:S4138
import { LightningElement } from 'lwc';

export default class s4138Trigger extends LightningElement {
    // Rule: "for of" should be used with Iterables
    connectedCallback() {
        // This component triggers: javascript:S4138
        console.log('Triggering SonarJS rule: javascript:S4138');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4138";
        return example;
    }
}