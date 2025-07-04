// This component is generated to trigger the SonarJS rule: javascript:S1523
import { LightningElement } from 'lwc';

export default class s1523Trigger extends LightningElement {
    // Rule: Dynamically executing code is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S1523
        // Noncompliant: Use of Function constructor for dynamic code execution
        var obj = new Function('return ' + 'data')();
        console.log('Triggering SonarJS rule: javascript:S1523');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1523";
        return example;
    }
}