// This component is generated to trigger the SonarJS rule: javascript:S4634
import { LightningElement } from 'lwc';

export default class s4634Trigger extends LightningElement {
    // Rule: Shorthand promises should be used
    connectedCallback() {
        // This component triggers: javascript:S4634
        console.log('Triggering SonarJS rule: javascript:S4634');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4634";
        return example;
    }

    badPromiseShorthand() {
        let fulfilledPromise = new Promise(resolve => resolve(42)); // BAD: should use Promise.resolve(42)
        let rejectedPromise = new Promise(function(resolve, reject) {
            reject('fail');
        }); // BAD: should use Promise.reject('fail')
        return { fulfilledPromise, rejectedPromise };
    }
}