// This component is generated to trigger the SonarJS rule: javascript:S2424
import { LightningElement } from 'lwc';

export default class s2424Trigger extends LightningElement {
    // Rule: Built-in objects should not be overridden
    connectedCallback() {
        // This component triggers: javascript:S2424
        console.log('Triggering SonarJS rule: javascript:S2424');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2424";
        return example;
    }

    // Antipattern for S2424: Built-in objects should not be overridden
    badOverrideBuiltIn() {
        Object = function() { return 'bad'; }; // BAD: Overriding built-in Object
        Array = 42; // BAD: Overriding built-in Array
        return Object();
    }
}