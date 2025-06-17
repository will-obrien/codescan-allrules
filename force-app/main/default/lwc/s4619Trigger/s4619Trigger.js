// This component is generated to trigger the SonarJS rule: javascript:S4619
import { LightningElement } from 'lwc';

export default class s4619Trigger extends LightningElement {
    // Rule: "in" should not be used on arrays
    connectedCallback() {
        // This component triggers: javascript:S4619
        console.log('Triggering SonarJS rule: javascript:S4619');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4619";
        return example;
    }
}