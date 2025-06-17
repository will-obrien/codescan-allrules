// This component is generated to trigger the SonarJS rule: javascript:S1440
import { LightningElement } from 'lwc';

export default class s1440Trigger extends LightningElement {
    // Rule: "===" and "!==" should be used instead of "==" and "!="
    connectedCallback() {
        // This component triggers: javascript:S1440
        console.log('Triggering SonarJS rule: javascript:S1440');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1440";
        return example;
    }
}