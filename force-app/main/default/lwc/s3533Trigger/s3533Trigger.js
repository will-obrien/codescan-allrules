// This component is generated to trigger the SonarJS rule: javascript:S3533
import { LightningElement } from 'lwc';

export default class s3533Trigger extends LightningElement {
    // Rule: "import" should be used to include external code
    connectedCallback() {
        // This component triggers: javascript:S3533
        console.log('Triggering SonarJS rule: javascript:S3533');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3533";
        return example;
    }
}