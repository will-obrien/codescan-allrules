// This component is generated to trigger the SonarJS rule: javascript:S6079
import { LightningElement } from 'lwc';

export default class s6079Trigger extends LightningElement {
    // Rule: Tests should not execute any code after "done()" is called
    connectedCallback() {
        // This component triggers: javascript:S6079
        console.log('Triggering SonarJS rule: javascript:S6079');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S6079";
        return example;
    }
}