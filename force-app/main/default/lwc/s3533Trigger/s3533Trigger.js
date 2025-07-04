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

// Antipattern for S3533: "import" should be used to include external code
export default class s3533Trigger extends LightningElement {
    connectedCallback() {
        // BAD: old module management
        // exports.area = function (r) { return PI * r * r; };
        // define(["./cart", "./horse"], function(cart, horse) { });
        // const circle = require('./circle.js');
    }
}