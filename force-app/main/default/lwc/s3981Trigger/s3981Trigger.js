// This component is generated to trigger the SonarJS rule: javascript:S3981
import { LightningElement } from 'lwc';

export default class s3981Trigger extends LightningElement {
    // Rule: Collection sizes and array length comparisons should make sense
    connectedCallback() {
        // This component triggers: javascript:S3981
        console.log('Triggering SonarJS rule: javascript:S3981');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3981";
        return example;
    }

    // Antipattern for S3981: Collection sizes and array length comparisons should make sense
    badLengthComparison() {
        let someArray = [1, 2, 3];
        let result = someArray.length >= 0; // BAD: always true
        return result;
    }
}