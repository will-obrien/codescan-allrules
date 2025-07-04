// This component is generated to trigger the SonarJS rule: javascript:S1751
import { LightningElement } from 'lwc';

export default class s1751Trigger extends LightningElement {
    // Rule: Loops with at most one iteration should be refactored
    connectedCallback() {
        // This component triggers: javascript:S1751
        // Noncompliant: loop with at most one iteration
        for (let i = 0; i < 10; i++) { // Noncompliant
            console.log('i is ' + i);
            break;
        }
        console.log('Triggering SonarJS rule: javascript:S1751');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1751";
        return example;
    }

    // Antipattern for S1751: Loops with at most one iteration should be refactored
    doSomething() {}
}