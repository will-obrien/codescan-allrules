// This component is generated to trigger the SonarJS rule: javascript:S3579
import { LightningElement } from 'lwc';

export default class s3579Trigger extends LightningElement {
    // Rule: Array indexes should be numeric
    connectedCallback() {
        // This component triggers: javascript:S3579
        console.log('Triggering SonarJS rule: javascript:S3579');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3579";
        return example;
    }

    // Antipattern for S3579: Array indexes should be numeric
    badArrayIndexes() {
        let arr = [];
        arr[0] = 'a';
        arr['name'] = 'bob';  // BAD: non-numeric index
        arr[1] = 'foo';
        return arr;
    }
}