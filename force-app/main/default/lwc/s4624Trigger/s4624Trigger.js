// This component is generated to trigger the SonarJS rule: javascript:S4624
import { LightningElement } from 'lwc';

export default class s4624Trigger extends LightningElement {
    // Rule: Template literals should not be nested
    connectedCallback() {
        // This component triggers: javascript:S4624
        console.log('Triggering SonarJS rule: javascript:S4624');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4624";
        return example;
    }

    // Antipattern for S4624: Template literals should not be nested
    badNestedTemplateLiterals() {
        let color = "red";
        let count = 3;
        let message = `I have ${color ? `${count} ${color}` : count} apples`; // BAD: nested template literals
        return message;
    }
}