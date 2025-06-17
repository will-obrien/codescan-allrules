// This component is generated to trigger the SonarJS rule: javascript:S6080
import { LightningElement } from 'lwc';

export default class s6080Trigger extends LightningElement {
    // Rule: Mocha timeout should be disabled by setting it to "0".
    connectedCallback() {
        // This component triggers: javascript:S6080
        console.log('Triggering SonarJS rule: javascript:S6080');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S6080";
        return example;
    }
}