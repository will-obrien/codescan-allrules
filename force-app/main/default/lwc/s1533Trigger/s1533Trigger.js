// This component is generated to trigger the SonarJS rule: javascript:S1533
import { LightningElement } from 'lwc';

export default class s1533Trigger extends LightningElement {
    // Rule: Wrapper objects should not be used for primitive types
    connectedCallback() {
        // This component triggers: javascript:S1533
        console.log('Triggering SonarJS rule: javascript:S1533');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1533";
        return example;
    }
}