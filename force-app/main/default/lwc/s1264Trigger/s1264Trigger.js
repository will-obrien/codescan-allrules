// This component is generated to trigger the SonarJS rule: javascript:S1264
import { LightningElement } from 'lwc';

export default class s1264Trigger extends LightningElement {
    // Rule: A "while" loop should be used instead of a "for" loop
    connectedCallback() {
        // This component triggers: javascript:S1264
        // Noncompliant: for loop with only condition (should be while)
        for (;this.someCondition();) {
            this.doSomething();
        }
        console.log('Triggering SonarJS rule: javascript:S1264');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1264";
        return example;
    }

    // Antipattern for S1264: A "while" loop should be used instead of a "for" loop
    someCondition() { return false; }
    doSomething() {}
}