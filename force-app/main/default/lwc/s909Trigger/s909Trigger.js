// This component is generated to trigger the SonarJS rule: javascript:S909
import { LightningElement } from 'lwc';

export default class s909Trigger extends LightningElement {
    // Rule: "continue" should not be used
    connectedCallback() {
        // This component triggers: javascript:S909
        console.log('Triggering SonarJS rule: javascript:S909');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S909";
        return example;
    }
}