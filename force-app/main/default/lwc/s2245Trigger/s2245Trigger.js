// This component is generated to trigger the SonarJS rule: javascript:S2245
import { LightningElement } from 'lwc';

export default class s2245Trigger extends LightningElement {
    // Rule: Using pseudorandom number generators (PRNGs) is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S2245
        // Noncompliant: Use of Math.random for security-sensitive value
        const val = Math.random(); // Noncompliant
        console.log('Triggering SonarJS rule: javascript:S2245');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2245";
        return example;
    }
}