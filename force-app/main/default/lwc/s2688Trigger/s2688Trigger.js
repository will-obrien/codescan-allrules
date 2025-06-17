// This component is generated to trigger the SonarJS rule: javascript:S2688
import { LightningElement } from 'lwc';

export default class s2688Trigger extends LightningElement {
    // Rule: "NaN" should not be used in comparisons
    connectedCallback() {
        // This component triggers: javascript:S2688
        console.log('Triggering SonarJS rule: javascript:S2688');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2688";
        return example;
    }
}