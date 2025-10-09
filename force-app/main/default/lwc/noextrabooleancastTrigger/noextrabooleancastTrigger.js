// This component is generated to trigger the rule: cs-js:no-extra-boolean-cast
import { LightningElement } from 'lwc';

export default class noextrabooleancastTrigger extends LightningElement {
    // Rule: disallow unnecessary boolean casts
    connectedCallback() {
        // This component triggers: cs-js:no-extra-boolean-cast
        console.log('Triggering rule: cs-js:no-extra-boolean-cast');
        
        let foo = 'test';
        let bar = 42;
        let baz = null;
        
        // Antipattern 1: Unnecessary double negation in if statement
        if (!!foo) {
            console.log('unnecessary double negation');
        }
        
        // Antipattern 2: Unnecessary Boolean() call in if statement
        if (Boolean(foo)) {
            console.log('unnecessary Boolean call');
        }
        
        // Antipattern 3: Triple negation
        var result = !!!bar;
        
        // Antipattern 4: Boolean cast in ternary where not needed
        var value = !!bar ? baz : null;
        
        // Antipattern 5: Nested Boolean casts
        var nested = Boolean(!!bar);
        
        // Antipattern 6: Boolean constructor with double negation
        var constructed = new Boolean(!!bar);
        
        // Antipattern 7: In while loop
        while (!!foo) {
            break;
        }
        
        // Antipattern 8: In do-while loop
        do {
            console.log('loop');
            break;
        } while (Boolean(foo));
        
        // Antipattern 9: In for loop
        for (; !!foo; ) {
            break;
        }
    }
}