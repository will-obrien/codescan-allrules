// This component is generated to trigger the SonarJS rule: javascript:S1301
import { LightningElement } from 'lwc';

export default class s1301Trigger extends LightningElement {
    // Rule: "switch" statements should have at least 3 "case" clauses
    connectedCallback() {
        // This component triggers: javascript:S1301
        console.log('Triggering SonarJS rule: javascript:S1301');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1301";
        return example;
    }
}

// Antipattern for S1301: "switch" statements should have at least 3 "case" clauses
import { LightningElement } from 'lwc';

export default class s1301Trigger extends LightningElement {
    connectedCallback() {
        let variable = 0;
        switch (variable) {
            case 0:
                this.doSomething();
                break;
            default:
                this.doSomethingElse();
                break;
        }
    }
    doSomething() {}
    doSomethingElse() {}
}