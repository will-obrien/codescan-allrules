// This component is generated to trigger the SonarJS rule: javascript:S4829
import { LightningElement } from 'lwc';

export default class s4829Trigger extends LightningElement {
    // Rule: Reading the Standard Input is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S4829
        console.log('Triggering SonarJS rule: javascript:S4829');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4829";
        return example;
    }
}