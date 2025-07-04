// This component is generated to trigger the SonarJS rule: javascript:S5852
import { LightningElement } from 'lwc';

export default class s5852Trigger extends LightningElement {
    // Rule: Using slow regular expressions is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S5852
        console.log('Triggering SonarJS rule: javascript:S5852');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S5852";
        return example;
    }

    // Antipattern for S5852: Using slow regular expressions is security-sensitive
    badSlowRegex() {
        let regex = /(a+)+b/; // BAD: catastrophic backtracking
        let str = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!';
        regex.test(str);
        return regex;
    }
}