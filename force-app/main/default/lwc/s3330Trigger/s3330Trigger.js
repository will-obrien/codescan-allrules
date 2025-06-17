// This component is generated to trigger the SonarJS rule: javascript:S3330
import { LightningElement } from 'lwc';

export default class s3330Trigger extends LightningElement {
    // Rule: Creating cookies without the "HttpOnly" flag is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S3330
        console.log('Triggering SonarJS rule: javascript:S3330');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3330";
        return example;
    }
}