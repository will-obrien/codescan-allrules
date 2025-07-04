// This component is generated to trigger the SonarJS rule: javascript:S3973
import { LightningElement } from 'lwc';

export default class s3973Trigger extends LightningElement {
    // Rule: A conditionally executed single line should be denoted by indentation
    connectedCallback() {
        // This component triggers: javascript:S3973
        console.log('Triggering SonarJS rule: javascript:S3973');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3973";
        return example;
    }

    // Antipattern for S3973: A conditionally executed single line should be denoted by indentation
    badConditionalIndentation(condition) {
        if (condition)
        doTheThing(); // BAD: not indented, intent is unclear
        doTheOtherThing();
        somethingElseEntirely();
    }
    doTheThing() {}
    doTheOtherThing() {}
    somethingElseEntirely() {}
}