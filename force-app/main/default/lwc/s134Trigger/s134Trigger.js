// This component is generated to trigger the SonarJS rule: javascript:S134
import { LightningElement } from 'lwc';

export default class s134Trigger extends LightningElement {
    // Rule: Control flow statements "if", "for", "while", "switch" and "try" should not be nested too deeply
    connectedCallback() {
        // This component triggers: javascript:S134
        console.log('Triggering SonarJS rule: javascript:S134');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S134";
        return example;
    }
}