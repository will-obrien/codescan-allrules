// This component is generated to trigger the SonarJS rule: javascript:S5725
import { LightningElement } from 'lwc';

export default class s5725Trigger extends LightningElement {
    // Rule: Disabling resource integrity features is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5725
        console.log('Triggering SonarJS rule: javascript:S5725');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5725";
        return example;
    }
}