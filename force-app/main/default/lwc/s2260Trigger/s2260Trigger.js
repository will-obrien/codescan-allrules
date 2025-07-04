// This component is generated to trigger the SonarJS rule: javascript:S2260
import { LightningElement } from 'lwc';

export default class s2260Trigger extends LightningElement {
    // Rule: JavaScript parser failure
    connectedCallback() {
        // This component triggers: javascript:S2260
        console.log('Triggering SonarJS rule: javascript:S2260');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2260";
        return example;
    }
}

// Antipattern for S2260: JavaScript parser failure
export default class s2260Trigger extends LightningElement {
    connectedCallback() {
        // BAD: Syntax error (simulated)
        // function () { // missing function name
        //     // ...
        // }
    }
}