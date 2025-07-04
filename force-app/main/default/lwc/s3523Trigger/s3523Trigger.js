// This component is generated to trigger the SonarJS rule: javascript:S3523
import { LightningElement } from 'lwc';

export default class s3523Trigger extends LightningElement {
    // Rule: Function constructors should not be used
    connectedCallback() {
        // This component triggers: javascript:S3523
        console.log('Triggering SonarJS rule: javascript:S3523');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3523";
        return example;
    }

    // Antipattern for S3523: Function constructors should not be used
    badFunctionConstructor(data) {
        // BAD: Function constructor used to parse data
        var obj = new Function('return ' + data)();
        return obj;
    }
}