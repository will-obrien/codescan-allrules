// This component is generated to trigger the VF/Lightning rule: cs-vf:no-extend-native
import { LightningElement } from 'lwc';

export default class noextendnativeTrigger extends LightningElement {
    // Rule: disallow extending native types
    connectedCallback() {
        // This component triggers: cs-vf:no-extend-native
        console.log('Triggering VF/Lightning rule: cs-vf:no-extend-native');
        
        // Example code that might trigger the rule
        var example = "This triggers rule cs-vf:no-extend-native";
        return example;
    }
}