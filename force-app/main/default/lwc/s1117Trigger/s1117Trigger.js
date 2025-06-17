// This component is generated to trigger the SonarJS rule: javascript:S1117
import { LightningElement } from 'lwc';

export default class s1117Trigger extends LightningElement {
    // Rule: Variables should not be shadowed
    connectedCallback() {
        // This component triggers: javascript:S1117
        console.log('Triggering SonarJS rule: javascript:S1117');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1117";
        return example;
    }
}