// This component is generated to trigger the SonarJS rule: javascript:S2428
import { LightningElement } from 'lwc';

export default class s2428Trigger extends LightningElement {
    // Rule: Object literal syntax should be used
    connectedCallback() {
        // This component triggers: javascript:S2428
        console.log('Triggering SonarJS rule: javascript:S2428');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2428";
        return example;
    }

    // Antipattern for S2428: Object literal syntax should be used
    badObjectLiteral() {
        let person = {};  // BAD: empty object
        person.firstName = 'John';
        person.middleInitial = 'Q';
        person.lastName = 'Public';
        return person;
    }
}