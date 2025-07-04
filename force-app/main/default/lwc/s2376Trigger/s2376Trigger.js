// This component is generated to trigger the SonarJS rule: javascript:S2376
import { LightningElement } from 'lwc';

export default class s2376Trigger extends LightningElement {
    // Rule: Property getters and setters should come in pairs
    connectedCallback() {
        // This component triggers: javascript:S2376
        // Noncompliant: setter without getter
        var obj = {
            set foo(value) {
                this.fooval = value;
            }
        }; // Noncompliant
        console.log('Triggering SonarJS rule: javascript:S2376');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2376";
        return example;
    }
}