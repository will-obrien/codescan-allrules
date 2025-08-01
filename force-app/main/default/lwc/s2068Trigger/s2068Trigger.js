// This component is generated to trigger the SonarJS rule: javascript:S2068
import { LightningElement } from 'lwc';

export default class s2068Trigger extends LightningElement {
    // Rule: Hard-coded credentials are security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S2068
        // Noncompliant: hard-coded password
        let password = 'mypassword'; // Noncompliant
        console.log('Triggering SonarJS rule: javascript:S2068');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2068";
        return example;
    }
}