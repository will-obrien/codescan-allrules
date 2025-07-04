// This component is generated to trigger the SonarJS rule: javascript:S131
import { LightningElement } from 'lwc';

export default class s131Trigger extends LightningElement {
    // Rule: "switch" statements should have "default" clauses
    connectedCallback() {
        // This component triggers: javascript:S131
        console.log('Triggering SonarJS rule: javascript:S131');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S131";
        return example;
    }
}

// Antipattern for S131: "switch" statements should have "default" clauses
export default class s131Trigger extends LightningElement {
    connectedCallback() {
        let param = 0;
        switch (param) {
            case 0:
                this.doSomething();
                break;
            case 1:
                this.doSomethingElse();
                break;
            // BAD: No default clause
        }
    }
    doSomething() {}
    doSomethingElse() {}
}