// This component is generated to trigger the SonarJS rule: javascript:S3001
import { LightningElement } from 'lwc';

export default class s3001Trigger extends LightningElement {
    // Rule: "delete" should be used only with object properties
    connectedCallback() {
        // This component triggers: javascript:S3001
        console.log('Triggering SonarJS rule: javascript:S3001');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3001";
        return example;
    }

    // Antipattern for S3001: "delete" should be used only with object properties
    badDeleteUsage() {
        var x  = 1;
        // delete x; // BAD: deleting a variable (not allowed in strict mode)
        function foo() {}
        // delete foo; // BAD: deleting a function (not allowed in strict mode)
    }
}