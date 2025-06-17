// This component is generated to trigger the SonarJS rule: javascript:S2432
import { LightningElement } from 'lwc';

export default class s2432Trigger extends LightningElement {
    // Rule: Setters should not return values
    connectedCallback() {
        // This component triggers: javascript:S2432
        console.log('Triggering SonarJS rule: javascript:S2432');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2432";
        return example;
    }
}