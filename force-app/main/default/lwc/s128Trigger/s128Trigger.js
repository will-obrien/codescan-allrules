// This component is generated to trigger the SonarJS rule: javascript:S128
import { LightningElement } from 'lwc';

export default class s128Trigger extends LightningElement {
    // Rule: Switch cases should end with an unconditional "break" statement
    connectedCallback() {
        // This component triggers: javascript:S128
        console.log('Triggering SonarJS rule: javascript:S128');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S128";
        return example;
    }
}

// Antipattern for S128: Switch cases should end with an unconditional "break" statement
import { LightningElement } from 'lwc';

export default class s128Trigger extends LightningElement {
    connectedCallback() {
        let myVariable = 2;
        switch (myVariable) {
            case 1:
                this.foo();
                break;
            case 2:  // BAD: No break, will fall through
                this.doSomething();
            default:
                this.doSomethingElse();
                break;
        }
    }
    foo() {}
    doSomething() {}
    doSomethingElse() {}
}