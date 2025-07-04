// This component is generated to trigger the SonarJS rule: javascript:S1516
import { LightningElement } from 'lwc';

export default class s1516Trigger extends LightningElement {
    // Rule: Multiline string literals should not be used
    connectedCallback() {
        // This component triggers: javascript:S1516
        console.log('Triggering SonarJS rule: javascript:S1516');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S1516";
        return example;
    }

    // Antipattern for S1516: Multiline string literals should not be used
    connectedCallback() {
        // BAD: Multiline string literal
        var myString = 'A rather long string of English text, an error message \
                actually that just keeps going and going -- an error \
                message to make the Energizer bunny blush (right through \
                those Schwarzenegger shades)! Where was I? Oh yes, \
                you\'ve got an error and all the extraneous whitespace is \
                just gravy.  Have a nice day.';
    }
}