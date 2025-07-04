// This component is generated to trigger the SonarJS rule: javascript:S3524
import { LightningElement } from 'lwc';

export default class s3524Trigger extends LightningElement {
    // Rule: Braces and parentheses should be used consistently with arrow functions
    connectedCallback() {
        // This component triggers: javascript:S3524
        console.log('Triggering SonarJS rule: javascript:S3524');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3524";
        return example;

        // Antipattern for S3524: Braces and parentheses should be used consistently with arrow functions
        var foo = (a) => { /* ... */ };  // Should remove parens from arg
        var bar = (a, b) => { return 0; };  // Should remove curly braces from body
    }
}