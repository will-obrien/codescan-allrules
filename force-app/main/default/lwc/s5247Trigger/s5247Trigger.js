// This component is generated to trigger the SonarJS rule: javascript:S5247
import { LightningElement } from 'lwc';

export default class s5247Trigger extends LightningElement {
    // Rule: Disabling auto-escaping in template engines is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5247
        console.log('Triggering SonarJS rule: javascript:S5247');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5247";
        return example;
    }
}