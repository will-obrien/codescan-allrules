// This component is generated to trigger the SonarJS rule: javascript:S3500
import { LightningElement } from 'lwc';

export default class s3500Trigger extends LightningElement {
    // Rule: Attempts should not be made to update "const" variables
    connectedCallback() {
        // This component triggers: javascript:S3500
        console.log('Triggering SonarJS rule: javascript:S3500');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3500";
        return example;
    }
}