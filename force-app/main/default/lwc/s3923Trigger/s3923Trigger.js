// This component is generated to trigger the SonarJS rule: javascript:S3923
import { LightningElement } from 'lwc';

export default class s3923Trigger extends LightningElement {
    // Rule: All branches in a conditional structure should not have exactly the same implementation
    connectedCallback() {
        // This component triggers: javascript:S3923
        console.log('Triggering SonarJS rule: javascript:S3923');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3923";
        return example;
    }

    // Antipattern for S3923: All branches in a conditional structure should not have exactly the same implementation
    doOneMoreThing() {}
}