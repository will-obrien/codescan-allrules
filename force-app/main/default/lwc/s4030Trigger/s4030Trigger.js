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
}