// This component is generated to trigger the SonarJS rule: javascript:S3686
import { LightningElement } from 'lwc';

export default class s3686Trigger extends LightningElement {
    // Rule: Functions should not be called both with and without "new"
    connectedCallback() {
        // This component triggers: javascript:S3686
        console.log('Triggering SonarJS rule: javascript:S3686');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3686";
        return example;
    }
}