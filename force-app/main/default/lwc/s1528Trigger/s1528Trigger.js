// This component is generated to trigger the SonarJS rule: javascript:S1528
import { LightningElement } from 'lwc';

export default class s1528Trigger extends LightningElement {
    // Rule: Array constructors should not be used
    connectedCallback() {
        // This component triggers: javascript:S1528
        console.log('Triggering SonarJS rule: javascript:S1528');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1528";
        return example;
    }

    // Antipattern for S1528: Array constructors should not be used
    connectedCallback() {
        let myArray = new Array(1, 2, 3);   // BAD: Results in 3-element array
        let emptyArray = new Array();       // BAD: Results in 0-element array
        let unstableArray = new Array(5);   // BAD: Variable in results
        let arr = new Array(3);             // BAD: empty array of length 3
        arr.forEach((x) => alert("Hello " + x)); // callback is not executed
        let anotherArr = arr.map(() => 42); // anotherArr is also empty
    }
}