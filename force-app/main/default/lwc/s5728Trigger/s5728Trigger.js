// This component is generated to trigger the SonarJS rule: javascript:S5728
import { LightningElement } from 'lwc';

export default class s5728Trigger extends LightningElement {
    // Rule: Disabling content security policy fetch directives is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5728
        console.log('Triggering SonarJS rule: javascript:S5728');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5728";
        return example;
    }
}