// This component is generated to trigger the SonarJS rule: javascript:S1848
import { LightningElement } from 'lwc';

export default class s1848Trigger extends LightningElement {
    // Rule: Objects should not be created to be dropped immediately without being used
    connectedCallback() {
        // This component triggers: javascript:S1848
        // Noncompliant: object created and immediately dropped
        new MyConstructor(); // Noncompliant
        console.log('Triggering SonarJS rule: javascript:S1848');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1848";
        return example;
    }
}

// Antipattern for S1848: Objects should not be created to be dropped immediately without being used
class MyConstructor {}