// This component is generated to trigger the SonarJS rule: javascript:S1535
import { LightningElement } from 'lwc';

export default class s1535Trigger extends LightningElement {
    // Rule: "for...in" loops should filter properties before acting on them
    connectedCallback() {
        // This component triggers: javascript:S1535
        console.log('Triggering SonarJS rule: javascript:S1535');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1535";
        return example;
    }

    // Antipattern for S1535: "for...in" loops should filter properties before acting on them
    connectedCallback() {
        let object = { a: 1, b: 2 };
        for (let name in object) {
            this.doSomething(name); // BAD: no hasOwnProperty check
        }
    }

    doSomething(name) {}
}