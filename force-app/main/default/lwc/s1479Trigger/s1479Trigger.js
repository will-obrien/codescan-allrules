// This component is generated to trigger the SonarJS rule: javascript:S1479
import { LightningElement } from 'lwc';

export default class s1479Trigger extends LightningElement {
    // Rule: "switch" statements should not have too many "case" clauses
    connectedCallback() {
        // This component triggers: javascript:S1479
        console.log('Triggering SonarJS rule: javascript:S1479');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1479";
        return example;
    }

    // Antipattern for S1479: "switch" statements should not have too many "case" clauses
    connectedCallback() {
        let value = 0;
        switch (value) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
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