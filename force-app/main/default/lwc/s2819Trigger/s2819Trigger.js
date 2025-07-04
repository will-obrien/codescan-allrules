// This component is generated to trigger the SonarJS rule: javascript:S2819
import { LightningElement } from 'lwc';

export default class s2819Trigger extends LightningElement {
    // Rule: Origins should be verified during cross-origin communications
    connectedCallback() {
        // This component triggers: javascript:S2819
        console.log('Triggering SonarJS rule: javascript:S2819');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2819";
        return example;
    }

    // Antipattern for S2819: Origins should be verified during cross-origin communications
    badCrossOriginMessage() {
        window.addEventListener('message', function(event) { // BAD: no origin check
            console.log(event.data);
        });
    }
}