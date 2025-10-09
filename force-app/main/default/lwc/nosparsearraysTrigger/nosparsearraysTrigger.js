// This component is generated to trigger the rule: cs-js:no-sparse-arrays
import { LightningElement } from 'lwc';

export default class nosparsearraysTrigger extends LightningElement {
    // Rule: disallow sparse arrays
    connectedCallback() {
        // This component triggers: cs-js:no-sparse-arrays
        console.log('Triggering rule: cs-js:no-sparse-arrays');
        
        // Antipattern 1: Array with empty slots at the end
        var items = [,]; // Violation: sparse array with empty slot
        
        // Antipattern 2: Array with empty slots in the middle
        var colors = [ "red",, "blue" ]; // Violation: empty slot between elements
        
        // Antipattern 3: Array with multiple empty slots
        var numbers = [1,,,4,5]; // Violation: multiple empty slots
        
        // Antipattern 4: Array starting with empty slots
        var mixed = [,"first", "second"]; // Violation: leading empty slot
        
        // Antipattern 5: Complex sparse array
        var complex = ["a",,"c",,"e",]; // Violation: multiple gaps
        
        console.log('Arrays created:', items, colors, numbers, mixed, complex);
    }
}