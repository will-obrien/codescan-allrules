// This component is generated to trigger the SonarJS rule: javascript:S3785
import { LightningElement } from 'lwc';

export default class s3785Trigger extends LightningElement {
    // Rule: "in" should not be used with primitive types
    connectedCallback() {
        // This component triggers: javascript:S3785
        console.log('Triggering SonarJS rule: javascript:S3785');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3785";
        return example;
    }

    // Antipattern for S3785: "in" should not be used with primitive types
    connectedCallback() {
        var x = "Foo";
        "length" in x; // BAD: TypeError
        0 in x;        // BAD: TypeError
    }
}