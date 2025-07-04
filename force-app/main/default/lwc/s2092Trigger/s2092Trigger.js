// This component is generated to trigger the SonarJS rule: javascript:S2092
import { LightningElement } from 'lwc';

export default class s2092Trigger extends LightningElement {
    // Rule: Creating cookies without the "secure" flag is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S2092
        console.log('Triggering SonarJS rule: javascript:S2092');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2092";
        return example;
    }

    // Antipattern for S2092: Creating cookies without the "secure" flag is security-sensitive
}