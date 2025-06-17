// This component is generated to trigger the SonarJS rule: javascript:S139
import { LightningElement } from 'lwc';

export default class s139Trigger extends LightningElement {
    // Rule: Comments should not be located at the end of lines of code
    connectedCallback() {
        // This component triggers: javascript:S139
        console.log('Triggering SonarJS rule: javascript:S139');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S139";
        return example;
    }
}