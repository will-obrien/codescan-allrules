// This component is generated to trigger the SonarJS rule: javascript:S1314
import { LightningElement } from 'lwc';

export default class s1314Trigger extends LightningElement {
    // Rule: Octal values should not be used
    connectedCallback() {
        // This component triggers: javascript:S1314
        // Noncompliant: Octal value used
        // var myNumber = 010;   // Noncompliant. myNumber will hold 8, not 10 - was this really expected? (Commented out to avoid linter error)
        console.log('Triggering SonarJS rule: javascript:S1314');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1314";
        return example;

        // Antipattern for S1314: Octal values should not be used
        let myNumber = '010'; // This would be interpreted as octal in some JS engines
        // In real code, using 010 as a number literal is not allowed in strict mode
    }
}