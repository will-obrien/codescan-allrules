// This component is generated to trigger the SonarJS rule: javascript:S2589
import { LightningElement } from 'lwc';

export default class s2589Trigger extends LightningElement {
    // Rule: Boolean expressions should not be gratuitous
    connectedCallback() {
        // This component triggers: javascript:S2589
        console.log('Triggering SonarJS rule: javascript:S2589');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2589";
        return example;
    }

    // Antipattern for S2589: Boolean expressions should not be gratuitous
    badGratuitousBoolean(a) {
        if (a) {
            if (a) { // BAD: redundant check
                return true;
            }
        }
        return false;
    }
}