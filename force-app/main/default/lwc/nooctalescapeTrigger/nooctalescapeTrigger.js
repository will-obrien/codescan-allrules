// This component triggers the no-octal-escape rule
import { LightningElement } from 'lwc';

export default class nooctalescapeTrigger extends LightningElement {
    connectedCallback() {
        // This component triggers: cs-js:no-octal-escape
        console.log('Triggering rule: cs-js:no-octal-escape');
        
        // Antipattern 1: Octal escape sequence in string
        var foo = "Copyright \251"; // Violation: octal escape sequence \251
        
        // Antipattern 2: Another octal escape sequence
        var bar = "Hello \141 World"; // Violation: octal escape sequence \141 (represents 'a')
        
        // Antipattern 3: Octal escape in template literal
        var baz = `Text with \377 character`; // Violation: octal escape sequence \377
        
        // Antipattern 4: Multiple octal escapes
        var message = "Start \101 middle \102 end"; // Violation: multiple octal escapes
        
        // Antipattern 5: Octal escape in single quotes
        var single = 'Character \040 space'; // Violation: octal escape for space
        
        // Antipattern 6: Original example
        const original = "Copyright \0"; // Octal escape - triggers rule
        
        console.log('Strings with octal escapes:', foo, bar, baz, message, single, original);
    }
}