// This component is generated to trigger the SonarJS rule: javascript:S1527
import { LightningElement } from 'lwc';

export default class s1527Trigger extends LightningElement {
    // Rule: "future reserved words" should not be used as identifiers
    connectedCallback() {
        // This component triggers: javascript:S1527
        // Noncompliant: using a future reserved word as an identifier
        // var package = document.getElementsByName("foo"); // Noncompliant (commented out to avoid syntax error)
        console.log('Triggering SonarJS rule: javascript:S1527');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1527";
        return example;
    }
}