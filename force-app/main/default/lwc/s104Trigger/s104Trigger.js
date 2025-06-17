// This component is generated to trigger the SonarJS rule: javascript:S104
import { LightningElement } from 'lwc';

export default class s104Trigger extends LightningElement {
    // Rule: Files should not have too many lines of code
    connectedCallback() {
        // This component triggers: javascript:S104
        console.log('Triggering SonarJS rule: javascript:S104');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S104";
        return example;
    }
}