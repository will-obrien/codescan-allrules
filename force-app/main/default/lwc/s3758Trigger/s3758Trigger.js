// This component is generated to trigger the SonarJS rule: javascript:S3758
import { LightningElement } from 'lwc';

export default class s3758Trigger extends LightningElement {
    // Rule: Values not convertible to numbers should not be used in numeric comparisons
    connectedCallback() {
        // This component triggers: javascript:S3758
        console.log('Triggering SonarJS rule: javascript:S3758');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3758";
        return example;
    }
}