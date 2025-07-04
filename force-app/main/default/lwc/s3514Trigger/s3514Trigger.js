// This component is generated to trigger the SonarJS rule: javascript:S3514
import { LightningElement } from 'lwc';

export default class s3514Trigger extends LightningElement {
    // Rule: Destructuring syntax should be used for assignments
    connectedCallback() {
        // This component triggers: javascript:S3514
        console.log('Triggering SonarJS rule: javascript:S3514');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3514";
        return example;
    }

    // Antipattern for S3514: Destructuring syntax should be used for assignments
    badDestructuring(obj1, obj2, array) {
        var a = obj1.a; // BAD: not using destructuring
        var b = obj1.b;
        var name = obj2.name; // only one extraction, ignored
        var zero = array[0]; // BAD: not using destructuring
        var one = array[1];
        return { a, b, name, zero, one };
    }
}