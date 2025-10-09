// This component is generated to trigger the rule: cs-js:no-label-var
import { LightningElement } from 'lwc';

export default class nolabelvarTrigger extends LightningElement {
    // Rule: disallow labels that share a name with a variable
    connectedCallback() {
        // This component triggers: cs-js:no-label-var
        console.log('Triggering rule: cs-js:no-label-var');
        
        // Antipattern 1: Label shares name with variable in scope
        var x = 'foo';
        function bar() {
            x: // Label has same name as variable x
            for (;;) {
                break x;
            }
        }
        
        // Antipattern 2: Label shares name with function parameter
        function baz(y) {
            y: // Label has same name as parameter y
            while (true) {
                break y;
            }
        }
        
        // Antipattern 3: Label shares name with outer scope variable
        var loop = 'outer';
        function test() {
            loop: // Label shares name with outer variable
            for (let i = 0; i < 10; i++) {
                if (i === 5) break loop;
            }
        }
    }
}