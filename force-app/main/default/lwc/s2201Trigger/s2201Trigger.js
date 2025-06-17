// This component is generated to trigger the SonarJS rule: javascript:S2201
import { LightningElement } from 'lwc';

export default class s2201Trigger extends LightningElement {
    // Rule: Return values from functions without side effects should not be ignored
    connectedCallback() {
        // This component triggers: javascript:S2201
        console.log('Triggering SonarJS rule: javascript:S2201');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2201";
        return example;
    }
}