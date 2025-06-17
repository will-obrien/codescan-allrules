// This component is generated to trigger the SonarJS rule: javascript:S4721
import { LightningElement } from 'lwc';

export default class s4721Trigger extends LightningElement {
    // Rule: Using shell interpreter when executing OS commands is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S4721
        console.log('Triggering SonarJS rule: javascript:S4721');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4721";
        return example;
    }
}