// This component is generated to trigger the SonarJS rule: javascript:S1067
import { LightningElement } from 'lwc';

export default class s1067Trigger extends LightningElement {
    // Rule: Expressions should not be too complex
    connectedCallback() {
        // This component triggers: javascript:S1067
        // Noncompliant: overly complex expression
        let a = true, b = false, c = true, d = false, e = true;
        let result = (a && b || c && d || e ? a && b : c || d && e ? b : a) && (b || c && d ? e : a && b || c);
        console.log('Complex result:', result); // Noncompliant
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1067";
        return example;
    }
}