// This component is generated to trigger the SonarJS rule: javascript:S1314
import { LightningElement } from 'lwc';

export default class s1314Trigger extends LightningElement {
    // Rule: Octal values should not be used
    connectedCallback() {
        // This component triggers: javascript:S1314
        console.log('Triggering SonarJS rule: javascript:S1314');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1314";
        return example;
    }
}