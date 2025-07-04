// This component is generated to trigger the SonarJS rule: javascript:S1172
import { LightningElement } from 'lwc';

export default class s1172Trigger extends LightningElement {
    // Rule: Unused function parameters should be removed
    connectedCallback() {
        // This component triggers: javascript:S1172
        console.log('Triggering SonarJS rule: javascript:S1172');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1172";
        return example;
    }

    // Antipattern for S1172: Unused function parameters should be removed
    badUnusedParams(a, b) {
        function doSomething(a, b) { // 'a' is unused
            return compute(b);
        }
        function compute(x) { return x * 2; }
        return doSomething(a, b);
    }
}