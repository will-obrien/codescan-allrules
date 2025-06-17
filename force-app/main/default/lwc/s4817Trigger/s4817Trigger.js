// This component is generated to trigger the SonarJS rule: javascript:S4817
import { LightningElement } from 'lwc';

export default class s4817Trigger extends LightningElement {
    // Rule: Executing XPath expressions is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S4817
        console.log('Triggering SonarJS rule: javascript:S4817');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4817";
        return example;
    }
}