// This component is generated to trigger the SonarJS rule: javascript:S4822
import { LightningElement } from 'lwc';

export default class s4822Trigger extends LightningElement {
    // Rule: Promise rejections should not be caught by 'try' block
    connectedCallback() {
        // This component triggers: javascript:S4822
        console.log('Triggering SonarJS rule: javascript:S4822');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4822";
        return example;
    }
}