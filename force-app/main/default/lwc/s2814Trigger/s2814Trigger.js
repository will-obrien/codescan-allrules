// This component is generated to trigger the SonarJS rule: javascript:S2814
import { LightningElement } from 'lwc';

export default class s2814Trigger extends LightningElement {
    // Rule: Variables and functions should not be redeclared
    connectedCallback() {
        // This component triggers: javascript:S2814
        console.log('Triggering SonarJS rule: javascript:S2814');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2814";
        return example;
    }

    // Antipattern for S2814: Variables and functions should not be redeclared
    badRedeclaration() {
        var a = 'foo';
        function a() {}   // BAD: redeclaration
        console.log(a);
        function myFunc(arg) {
            var arg = 'event'; // BAD: redeclaration of parameter
        }
        function fun() {
            console.log('foo');
        }
        function fun() {  // BAD: redeclaration
            console.log('bar');
        }
    }
}