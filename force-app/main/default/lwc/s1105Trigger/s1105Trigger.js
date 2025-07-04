// This component is generated to trigger the SonarJS rule: javascript:S1105
import { LightningElement } from 'lwc';

export default class s1105Trigger extends LightningElement {
    // Rule: An open curly brace should be located at the end of a line
    connectedCallback() {
        // This component triggers: javascript:S1105
        console.log('Triggering SonarJS rule: javascript:S1105');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1105";
        return example;
    }

    // Antipattern for S1105: An open curly brace should be located at the end of a line
    badCurlyBraceStyle() {
        // Noncompliant: curly brace on new line
        let result = 0;
        if (result === 0)
        {
            result = 1;
        }
        else {
            result = 2;
        }
        return result;
    }
}