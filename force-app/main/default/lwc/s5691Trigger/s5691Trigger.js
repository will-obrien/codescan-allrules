// This component is generated to trigger the SonarJS rule: javascript:S5691
import { LightningElement } from 'lwc';

export default class s5691Trigger extends LightningElement {
    // Rule: Statically serving hidden files is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5691
        console.log('Triggering SonarJS rule: javascript:S5691');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5691";
        return example;
    }
}