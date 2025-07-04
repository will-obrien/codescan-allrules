// This component is generated to trigger the SonarJS rule: javascript:S4139
import { LightningElement } from 'lwc';

export default class s4139Trigger extends LightningElement {
    // Rule: "for in" should not be used with iterables
    connectedCallback() {
        // This component triggers: javascript:S4139
        console.log('Triggering SonarJS rule: javascript:S4139');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4139";
        return example;
    }

    // Antipattern for S4139: 'for in' should not be used with iterables
    badForInIterable() {
        const arr = [4, 3, 2, 1];
        for (let value in arr) {  // BAD: iterates indexes, not values
            console.log(value);
        }
    }
}