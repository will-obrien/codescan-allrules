// This component is generated to trigger the SonarJS rule: javascript:S2255
import { LightningElement } from 'lwc';

export default class s2255Trigger extends LightningElement {
    // Rule: Writing cookies is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S2255
        // Noncompliant: writing cookies is security-sensitive
        document.cookie = 'name=John'; // Noncompliant
        console.log('Triggering SonarJS rule: javascript:S2255');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2255";
        return example;
    }
}