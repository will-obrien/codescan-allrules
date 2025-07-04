// This component is generated to trigger the SonarJS rule: javascript:S2208
import { LightningElement } from 'lwc';
// BAD: Wildcard import
import * as Imported from 'aModule';

export default class s2208Trigger extends LightningElement {
    // Rule: Wildcard imports should not be used
    connectedCallback() {
        // This component triggers: javascript:S2208
        console.log('Triggering SonarJS rule: javascript:S2208');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2208";
        return example;
    }
}