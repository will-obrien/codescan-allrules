// This component is generated to trigger the SonarJS rule: javascript:S3003
import { LightningElement } from 'lwc';

export default class s3003Trigger extends LightningElement {
    // Rule: Comparison operators should not be used with strings
    connectedCallback() {
        // This component triggers: javascript:S3003
        console.log('Triggering SonarJS rule: javascript:S3003');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3003";
        return example;
    }
}