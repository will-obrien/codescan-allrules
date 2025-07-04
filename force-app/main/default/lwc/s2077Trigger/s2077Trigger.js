// This component is generated to trigger the SonarJS rule: javascript:S2077
import { LightningElement } from 'lwc';

export default class s2077Trigger extends LightningElement {
    // Rule: Formatting SQL queries is security-sensitive
    connectedCallback() {
        // This component triggers: javascript:S2077
        console.log('Triggering SonarJS rule: javascript:S2077');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S2077";
        return example;
    }

    // Antipattern for S2077: Formatting SQL queries is security-sensitive
    connectedCallback() {
        // BAD: Formatted SQL query with user input
        let userinput = '1 OR 1=1';
        let query = 'SELECT * FROM users WHERE id = ' + userinput;
    }
}