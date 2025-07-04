// This component is generated to trigger the SonarJS rule: javascript:S3699
import { LightningElement } from 'lwc';

export default class s3699Trigger extends LightningElement {
    // Rule: The output of functions that don't return anything should not be used
    connectedCallback() {
        // This component triggers: javascript:S3699
        console.log('Triggering SonarJS rule: javascript:S3699');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3699";
        return example;
    }

    // Antipattern for S3699: The output of functions that don't return anything should not be used
    badOutputUsage() {
        function foo() {
            console.log("Hello, World!");
        }
        let a = foo(); // BAD: using output of function that returns nothing
        return a;
    }
}