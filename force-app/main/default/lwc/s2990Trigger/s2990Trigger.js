// This component is generated to trigger the SonarJS rule: javascript:S2990
import { LightningElement } from 'lwc';

export default class s2990Trigger extends LightningElement {
    // Rule: The global "this" object should not be used
    connectedCallback() {
        // This component triggers: javascript:S2990
        console.log('Triggering SonarJS rule: javascript:S2990');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2990";
        return example;
    }

    // Antipattern for S2990: The global "this" object should not be used
    badGlobalThis() {
        this.foo = 1;   // BAD: using global this
        console.log(this.foo); // BAD: using global this
    }
}