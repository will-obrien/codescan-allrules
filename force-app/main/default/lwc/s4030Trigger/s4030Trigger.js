// This component is generated to trigger the SonarJS rule: javascript:S4030
import { LightningElement } from 'lwc';

export default class s4030Trigger extends LightningElement {
    // Rule: Collection and array contents should be used
    connectedCallback() {
        // This component triggers: javascript:S4030
        console.log('Triggering SonarJS rule: javascript:S4030');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4030";
        return example;
    }

    // Antipattern for S4030: Collection and array contents should be used
    badUnusedCollection() {
        const strings = [];
        strings.push('a');
        strings.push('b');
        strings.push('c');
        // BAD: collection is populated but never used
        return 'done';
    }
}