// This component is generated to trigger the SonarJS rule: javascript:S1121
import { LightningElement } from 'lwc';

export default class s1121Trigger extends LightningElement {
    // Rule: Assignments should not be made from within sub-expressions
    connectedCallback() {
        // This component triggers: javascript:S1121
        console.log('Triggering SonarJS rule: javascript:S1121');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1121";
        return example;
    }
}