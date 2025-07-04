// This component is generated to trigger the SonarJS rule: javascript:S3498
import { LightningElement } from 'lwc';

export default class s3498Trigger extends LightningElement {
    // Rule: Object literal shorthand syntax should be used
    connectedCallback() {
        // This component triggers: javascript:S3498
        console.log('Triggering SonarJS rule: javascript:S3498');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3498";
        return example;
    }

    // Antipattern for S3498: Object literal shorthand syntax should be used
    connectedCallback() {
        let a = 1;
        let myObj = {
            a: a,  // BAD: should use shorthand
            fun: function () {  // BAD: should use shorthand
                // ...
            }
        };
    }
}