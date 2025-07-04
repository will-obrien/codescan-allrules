// This component is generated to trigger the SonarJS rule: javascript:S1530
import { LightningElement } from 'lwc';

export default class s1530Trigger extends LightningElement {
    // Rule: Function declarations should not be made within blocks
    connectedCallback() {
        // This component triggers: javascript:S1530
        console.log('Triggering SonarJS rule: javascript:S1530');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1530";
        return example;
    }
}

// Antipattern for S1530: Function declarations should not be made within blocks
export default class s1530Trigger extends LightningElement {
    connectedCallback() {
        let x = true;
        if (x) {
            function foo() {} // BAD: function declaration inside block
        }
    }
}