// This component is generated to trigger the SonarJS rule: javascript:S121
import { LightningElement } from 'lwc';

export default class s121Trigger extends LightningElement {
    // Rule: Control structures should use curly braces
    connectedCallback() {
        // This component triggers: javascript:S121
        console.log('Triggering SonarJS rule: javascript:S121');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S121";
        return example;
    }

    // Antipattern for S121: Control structures should use curly braces
    connectedCallback() {
        // BAD: No curly braces
        let condition = true;
        if (condition)
            this.doSomething();
    }

    doSomething() {
        // ...
    }
}