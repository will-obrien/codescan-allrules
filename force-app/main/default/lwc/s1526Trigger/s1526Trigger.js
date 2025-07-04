// This component is generated to trigger the SonarJS rule: javascript:S1526
import { LightningElement } from 'lwc';

export default class s1526Trigger extends LightningElement {
    // Rule: Variables declared with "var" should be declared before they are used
    connectedCallback() {
        // This component triggers: javascript:S1526
        console.log('Triggering SonarJS rule: javascript:S1526');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1526";
        return example;
    }
}

// Antipattern for S1526: Variables declared with "var" should be declared before they are used
import { LightningElement } from 'lwc';

export default class s1526Trigger extends LightningElement {
    connectedCallback() {
        var x = 1;
        function fun() {
            alert(x); // BAD: x is declared later in the same scope
            if (true) {
                var x = 42; // Declaration in function scope (not block scope!) shadows global variable
            }
        }
        fun();
    }
}