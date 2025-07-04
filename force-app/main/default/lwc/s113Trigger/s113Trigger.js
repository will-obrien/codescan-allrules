// This component is generated to trigger the SonarJS rule: javascript:S113
import { LightningElement } from 'lwc';

export default class s113Trigger extends LightningElement {
    // Rule: Files should contain an empty newline at the end
    connectedCallback() {
        // This component triggers: javascript:S113
        console.log('Triggering SonarJS rule: javascript:S113');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S113";
        return example;
    }
}

// Antipattern for S113: Files should contain an empty newline at the end
export default class s113Trigger extends LightningElement {
    connectedCallback() {
        // BAD: No newline at end of file
        // class Test {
        // }
        // \ No newline at end of file
    }
}