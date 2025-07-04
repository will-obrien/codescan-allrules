// This component is generated to trigger the SonarJS rule: javascript:S2427
import { LightningElement } from 'lwc';

export default class s2427Trigger extends LightningElement {
    // Rule: The base should be provided to "parseInt"
    connectedCallback() {
        // This component triggers: javascript:S2427
        console.log('Triggering SonarJS rule: javascript:S2427');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2427";
        return example;
    }

    // Antipattern for S2427: The base should be provided to "parseInt"
    badParseIntBase() {
        var value = parseInt("010");  // BAD: base not provided, may yield unexpected results
        return value;
    }
}