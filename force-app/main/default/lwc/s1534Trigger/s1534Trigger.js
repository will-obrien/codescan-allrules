// This component is generated to trigger the SonarJS rule: javascript:S1534
import { LightningElement } from 'lwc';

export default class s1534Trigger extends LightningElement {
    // Rule: Property names should not be duplicated within a class or object literal
    connectedCallback() {
        // This component triggers: javascript:S1534
        console.log('Triggering SonarJS rule: javascript:S1534');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1534";
        return example;
    }

    // Antipattern for S1534: Property names should not be duplicated within a class or object literal
    connectedCallback() {
        let data = {
            key: 'value',
            key: 'value2', // BAD: duplicate property name
        };
    }
}