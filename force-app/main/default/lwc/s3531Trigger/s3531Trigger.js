// This component is generated to trigger the SonarJS rule: javascript:S3531
import { LightningElement } from 'lwc';

export default class s3531Trigger extends LightningElement {
    // Rule: Generators should "yield" something
    connectedCallback() {
        // This component triggers: javascript:S3531
        console.log('Triggering SonarJS rule: javascript:S3531');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3531";
        return example;
    }

    // Antipattern for S3531: Generators should "yield" something
    connectedCallback() {
        function* myGen(a, b) {  // BAD: generator without yield
            let answer = 0;
            answer += a * b;
        }
    }
}