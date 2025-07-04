// This component is generated to trigger the SonarJS rule: javascript:S3799
import { LightningElement } from 'lwc';

export default class s3799Trigger extends LightningElement {
    // Rule: Destructuring patterns should not be empty
    connectedCallback() {
        // This component triggers: javascript:S3799
        console.log('Triggering SonarJS rule: javascript:S3799');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3799";
        return example;
    }

    // Antipattern for S3799: Destructuring patterns should not be empty
    badEmptyDestructuring(myObj) {
        var {a: {}, b} = myObj; // BAD: empty destructuring pattern
        function foo({first: [], second}) { // BAD: empty array destructuring
            // ...
        }
        return b;
    }
}