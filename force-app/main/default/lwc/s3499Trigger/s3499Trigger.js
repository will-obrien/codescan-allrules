// This component is generated to trigger the SonarJS rule: javascript:S3499
import { LightningElement } from 'lwc';

export default class s3499Trigger extends LightningElement {
    // Rule: Shorthand object properties should be grouped at the beginning or end of an object declaration
    connectedCallback() {
        // This component triggers: javascript:S3499
        console.log('Triggering SonarJS rule: javascript:S3499');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3499";
        return example;
    }

    // Antipattern for S3499: Shorthand object properties should be grouped at the beginning or end
    badShorthandGrouping() {
        let foo = 1, color = 'red', judyGarland = true;
        let obj1 = {
            foo,
            a: 1,
            color,  // BAD: not grouped
            b: 2,
            judyGarland  // BAD: not grouped
        };
        return obj1;
    }
}