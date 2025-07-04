// This component is generated to trigger the SonarJS rule: javascript:S1066
import { LightningElement } from 'lwc';

export default class s1066Trigger extends LightningElement {
    // Rule: Collapsible "if" statements should be merged
    connectedCallback() {
        // This component triggers: javascript:S1066
        console.log('Triggering SonarJS rule: javascript:S1066');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1066";
        return example;
    }

    // Antipattern for S1066: Collapsible "if" statements should be merged
    connectedCallback() {
        let x = 1, y = 2;
        if (x != undefined) {
            if (y === 2) {
                // BAD: collapsible if statements
            }
        }
    }
}