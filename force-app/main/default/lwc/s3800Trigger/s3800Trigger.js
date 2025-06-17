// This component is generated to trigger the SonarJS rule: javascript:S3800
import { LightningElement } from 'lwc';

export default class s3800Trigger extends LightningElement {
    // Rule: Functions should always return the same type
    connectedCallback() {
        // This component triggers: javascript:S3800
        console.log('Triggering SonarJS rule: javascript:S3800');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3800";
        return example;
    }
}