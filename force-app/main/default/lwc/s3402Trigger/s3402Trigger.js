// This component is generated to trigger the SonarJS rule: javascript:S3402
import { LightningElement } from 'lwc';

export default class s3402Trigger extends LightningElement {
    // Rule: Strings and non-strings should not be added
    connectedCallback() {
        // This component triggers: javascript:S3402
        console.log('Triggering SonarJS rule: javascript:S3402');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3402";
        return example;
    }

    // Antipattern for S3402: Strings and non-strings should not be added
    badStringAddition() {
        let x = 5 + 8; // okay
        let z = '8';
        return x + z; // BAD: yields string '138'
    }
}