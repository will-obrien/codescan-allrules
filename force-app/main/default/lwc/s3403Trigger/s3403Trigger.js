// This component is generated to trigger the SonarJS rule: javascript:S3403
import { LightningElement } from 'lwc';

export default class s3403Trigger extends LightningElement {
    // Rule: Strict equality operators should not be used with dissimilar types
    connectedCallback() {
        // This component triggers: javascript:S3403
        console.log('Triggering SonarJS rule: javascript:S3403');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3403";
        return example;
    }
}