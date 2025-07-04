// This component is generated to trigger the SonarJS rule: javascript:S2737
import { LightningElement } from 'lwc';

export default class s2737Trigger extends LightningElement {
    // Rule: "catch" clauses should do more than rethrow
    connectedCallback() {
        // This component triggers: javascript:S2737
        // Noncompliant: catch clause that only rethrows
        try {
            doSomething();
        } catch (ex) {
            throw ex; // Noncompliant
        }
        console.log('Triggering SonarJS rule: javascript:S2737');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2737";
        return example;
    }
}