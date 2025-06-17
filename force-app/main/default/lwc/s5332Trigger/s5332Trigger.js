// This component is generated to trigger the SonarJS rule: javascript:S5332
import { LightningElement } from 'lwc';

export default class s5332Trigger extends LightningElement {
    // Rule: Using clear-text protocols is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5332
        console.log('Triggering SonarJS rule: javascript:S5332');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5332";
        return example;
    }
}