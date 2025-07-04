// This component is generated to trigger the SonarJS rule: javascript:S2310
import { LightningElement } from 'lwc';

export default class s2310Trigger extends LightningElement {
    // Rule: Loop counters should not be assigned to from within the loop body
    connectedCallback() {
        // This component triggers: javascript:S2310
        console.log('Triggering SonarJS rule: javascript:S2310');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2310";
        return example;
    }

    // Antipattern for S2310: Loop counters should not be assigned to from within the loop body
    badLoopCounterAssignment() {
        var names = [ 'Jack', 'Jim', '', 'John' ];
        for (var i = 0; i < names.length; i++) {
            if (!names[i]) {
                i = names.length; // BAD: modifies loop counter inside loop
            } else {
                console.log(names[i]);
            }
        }
    }
}