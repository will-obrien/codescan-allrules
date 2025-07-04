// This component is generated to trigger the SonarJS rule: javascript:S4158
import { LightningElement } from 'lwc';

export default class s4158Trigger extends LightningElement {
    // Rule: Empty collections should not be accessed or iterated
    connectedCallback() {
        // This component triggers: javascript:S4158
        console.log('Triggering SonarJS rule: javascript:S4158');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4158";
        return example;
    }

    // Antipattern for S4158: Empty collections should not be accessed or iterated
    badEmptyCollectionAccess() {
        let strings = [];
        if (strings.includes('foo')) {}  // BAD: accessing empty collection
        for (let str of strings) {}     // BAD: iterating empty collection
        strings.forEach(str => this.doSomething(str)); // BAD: iterating empty collection
    }
    doSomething(str) {}
}