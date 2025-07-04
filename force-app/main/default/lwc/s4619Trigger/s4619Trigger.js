// This component is generated to trigger the SonarJS rule: javascript:S4619
import { LightningElement } from 'lwc';

export default class s4619Trigger extends LightningElement {
    // Rule: "in" should not be used on arrays
    connectedCallback() {
        // This component triggers: javascript:S4619
        console.log('Triggering SonarJS rule: javascript:S4619');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4619";
        return example;
    }

    // Antipattern for S4619: 'in' should not be used on arrays
    badInOnArray() {
        let arr = ['a', 'b', 'c'];
        let expectedValue = 'b';
        if (expectedValue in arr) { // BAD: always false
            return expectedValue + ' found in the array';
        } else {
            return expectedValue + ' not found';
        }
    }
}