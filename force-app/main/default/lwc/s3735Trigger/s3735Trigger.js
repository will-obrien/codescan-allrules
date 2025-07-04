// This component is generated to trigger the SonarJS rule: javascript:S3735
import { LightningElement } from 'lwc';

export default class s3735Trigger extends LightningElement {
    // Rule: "void" should not be used
    connectedCallback() {
        // This component triggers: javascript:S3735
        console.log('Triggering SonarJS rule: javascript:S3735');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3735";
        return example;
    }

    // Antipattern for S3735: "void" should not be used
    badVoidUsage() {
        void doSomething(); // BAD: void operator used unnecessarily
    }
    doSomething() {}
}