// This component is generated to trigger the SonarJS rule: javascript:S3786
import { LightningElement } from 'lwc';

export default class s3786Trigger extends LightningElement {
    // Rule: Template literal placeholder syntax should not be used in regular strings
    connectedCallback() {
        // This component triggers: javascript:S3786
        console.log('Triggering SonarJS rule: javascript:S3786');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3786";
        return example;
    }
}