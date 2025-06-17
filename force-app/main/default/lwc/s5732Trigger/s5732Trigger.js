// This component is generated to trigger the SonarJS rule: javascript:S5732
import { LightningElement } from 'lwc';

export default class s5732Trigger extends LightningElement {
    // Rule: Disabling content security policy frame-ancestors directive is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5732
        console.log('Triggering SonarJS rule: javascript:S5732');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5732";
        return example;
    }
}