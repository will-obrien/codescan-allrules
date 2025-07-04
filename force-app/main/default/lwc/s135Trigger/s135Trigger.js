// This component is generated to trigger the SonarJS rule: javascript:S135
import { LightningElement } from 'lwc';

export default class s135Trigger extends LightningElement {
    // Rule: Loops should not contain more than a single "break" or "continue" statement
    connectedCallback() {
        // This component triggers: javascript:S135
        // Noncompliant: loop with more than one continue statement
        for (var i = 1; i <= 10; i++) {  // Noncompliant - 2 continue
            if (i % 2 == 0) {
                continue;
            }
            if (i % 3 == 0) {
                continue;
            }
            alert('i = ' + i);
        }
        console.log('Triggering SonarJS rule: javascript:S135');
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S135";
        return example;
    }
}