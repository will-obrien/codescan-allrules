// This component is generated to trigger the SonarJS rule: javascript:S1442
import { LightningElement } from 'lwc';

export default class s1442Trigger extends LightningElement {
    // Rule: "alert(...)" should not be used
    connectedCallback() {
        // This component triggers: javascript:S1442
        console.log('Triggering SonarJS rule: javascript:S1442');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1442";
        return example;
    }

    // Antipattern for S1442: "alert(...)" should not be used
    connectedCallback() {
        let unexpectedCondition = true;
        if (unexpectedCondition) {
            alert('Unexpected Condition'); // BAD: alert used
        }
    }
}