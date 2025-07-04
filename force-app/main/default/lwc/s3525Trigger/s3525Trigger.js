// This component is generated to trigger the SonarJS rule: javascript:S3525
import { LightningElement } from 'lwc';

export default class s3525Trigger extends LightningElement {
    // Rule: Class methods should be used instead of "prototype" assignments
    connectedCallback() {
        // This component triggers: javascript:S3525
        console.log('Triggering SonarJS rule: javascript:S3525');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S3525";
        return example;
    }

    // Antipattern for S3525: Class methods should be used instead of "prototype" assignments
    badPrototypeAssignment() {
        function MyNonClass(initializerArgs = []) {
            this._values = [...initializerArgs];
        }
        MyNonClass.prototype.doSomething = function () {
            // BAD: method assigned to prototype instead of class
            return 'bad';
        };
        const obj = new MyNonClass([1,2,3]);
        return obj.doSomething();
    }
}