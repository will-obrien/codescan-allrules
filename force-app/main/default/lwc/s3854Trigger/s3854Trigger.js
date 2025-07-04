// This component is generated to trigger the SonarJS rule: javascript:S3854
import { LightningElement } from 'lwc';

class Animal {}

export default class s3854Trigger extends Animal {
    constructor(name) {
        super();
        this.name = name;
        super();         // BAD: super() called multiple times
        super.doSomething();
    }

    // Rule: "super()" should be invoked appropriately
    connectedCallback() {
        // This component triggers: javascript:S3854
        console.log('Triggering SonarJS rule: javascript:S3854');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3854";
        return example;
    }
}