// This component is generated to trigger the SonarJS rule: javascript:S3812
import { LightningElement } from 'lwc';

export default class s3812Trigger extends LightningElement {
    // Rule: Results of "in" and "instanceof" should be negated rather than operands
    connectedCallback() {
        // This component triggers: javascript:S3812
        console.log('Triggering SonarJS rule: javascript:S3812');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3812";
        return example;
    }
}