// This component is generated to trigger the SonarJS rule: javascript:S1441
import { LightningElement } from 'lwc';

export default class s1441Trigger extends LightningElement {
    // Rule: Quotes for string literals should be used consistently
    connectedCallback() {
        // This component triggers: javascript:S1441
        console.log('Triggering SonarJS rule: javascript:S1441');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1441";
        return example;
    }
}