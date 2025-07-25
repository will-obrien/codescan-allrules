// This component is generated to trigger the SonarJS rule: javascript:S1226
import { LightningElement } from 'lwc';

export default class s1226Trigger extends LightningElement {
    // Rule: Function parameters, caught exceptions and foreach variables' initial values should not be ignored
    connectedCallback() {
        // This component triggers: javascript:S1226
        console.log('Triggering SonarJS rule: javascript:S1226');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1226";
        return example;
    }

    // Antipattern for S1226: Function parameters, caught exceptions and foreach variables' initial values should not be ignored
    badParameterAssignment(name, strings) {
        name = 'foo'; // BAD: assignment to parameter
        for (var str of strings) {
            str = ''; // BAD: assignment to foreach variable
        }
    }
}