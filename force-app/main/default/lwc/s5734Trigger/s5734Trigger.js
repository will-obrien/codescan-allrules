// This component is generated to trigger the SonarJS rule: javascript:S5734
import { LightningElement } from 'lwc';

export default class s5734Trigger extends LightningElement {
    // Rule: Allowing browsers to sniff MIME types is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5734
        console.log('Triggering SonarJS rule: javascript:S5734');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5734";
        return example;
    }
}