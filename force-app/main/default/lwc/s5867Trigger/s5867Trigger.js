// This component is generated to trigger the SonarJS rule: javascript:S5867
import { LightningElement } from 'lwc';

export default class s5867Trigger extends LightningElement {
    // Rule: Regular expressions using Unicode character classes or property escapes should enable the unicode flag
    connectedCallback() {
        // This component triggers: javascript:S5867
        console.log('Triggering SonarJS rule: javascript:S5867');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5867";
        return example;
    }
}