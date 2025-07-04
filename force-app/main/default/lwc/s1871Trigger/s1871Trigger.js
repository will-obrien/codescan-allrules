// This component is generated to trigger the SonarJS rule: javascript:S1871
import { LightningElement } from 'lwc';

export default class s1871Trigger extends LightningElement {
    // Rule: Two branches in a conditional structure should not have exactly the same implementation
    connectedCallback() {
        // This component triggers: javascript:S1871
        console.log('Triggering SonarJS rule: javascript:S1871');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1871";
        return example;
    }
}

// Antipattern for S1871: Two branches in a conditional structure should not have exactly the same implementation
import { LightningElement } from 'lwc';

export default class s1871Trigger extends LightningElement {
    connectedCallback() {
        let a = 25;
        if (a >= 0 && a < 10) {
            this.doFirstThing();
            this.doTheThing();
        } else if (a >= 10 && a < 20) {
            this.doTheOtherThing();
        } else if (a >= 20 && a < 50) {
            this.doFirstThing();
            this.doTheThing(); // BAD: duplicate implementation
        } else {
            this.doTheRest();
        }
    }
    doFirstThing() {}
    doTheThing() {}
    doTheOtherThing() {}
    doTheRest() {}
}