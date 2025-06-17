// This component is generated to trigger the SonarJS rule: javascript:S1994
import { LightningElement } from 'lwc';

export default class s1994Trigger extends LightningElement {
    // Rule: "for" loop increment clauses should modify the loops' counters
    connectedCallback() {
        // This component triggers: javascript:S1994
        console.log('Triggering SonarJS rule: javascript:S1994');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1994";
        return example;
    }
}