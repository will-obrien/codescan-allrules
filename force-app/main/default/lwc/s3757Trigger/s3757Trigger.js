// This component is generated to trigger the SonarJS rule: javascript:S3757
import { LightningElement } from 'lwc';

export default class s3757Trigger extends LightningElement {
    // Rule: Arithmetic operations should not result in "NaN"
    connectedCallback() {
        // This component triggers: javascript:S3757
        console.log('Triggering SonarJS rule: javascript:S3757');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3757";
        return example;
    }

    // Antipattern for S3757: Arithmetic operations should not result in NaN
    badNaNArithmetic() {
        let x = [1, 2];
        let y = x / 4; // BAD: results in NaN
        return y;
    }
}