// This component is generated to trigger the SonarJS rule: javascript:S2757
import { LightningElement } from 'lwc';

export default class s2757Trigger extends LightningElement {
    // Rule: Non-existent operators '=+', '=-' and '=!' should not be used
    connectedCallback() {
        // This component triggers: javascript:S2757
        console.log('Triggering SonarJS rule: javascript:S2757');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2757";
        return example;
    }
}