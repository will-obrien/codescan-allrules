// This component is generated to trigger the SonarJS rule: javascript:S1143
import { LightningElement } from 'lwc';

export default class s1143Trigger extends LightningElement {
    // Rule: Jump statements should not occur in "finally" blocks
    connectedCallback() {
        // This component triggers: javascript:S1143
        console.log('Triggering SonarJS rule: javascript:S1143');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1143";
        return example;
    }
}