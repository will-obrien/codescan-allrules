// This component is generated to trigger the rule: cs-js:no-proto
import { LightningElement } from 'lwc';

export default class noprotoTrigger extends LightningElement {
    // Rule: disallow the use of the `__proto__` property
    connectedCallback() {
        // This component triggers: cs-js:no-proto
        console.log('Triggering rule: cs-js:no-proto');
        
        let obj = {};
        
        // Antipattern 1: Accessing __proto__ property directly
        var a = obj.__proto__;
        
        // Antipattern 2: Using bracket notation to access __proto__
        var b = obj["__proto__"];
        
        // Antipattern 3: Setting __proto__ property
        obj.__proto__ = Array.prototype;
        
        // Antipattern 4: Using __proto__ in object literal
        var newObj = {
            __proto__: Array.prototype,
            length: 0
        };
        
        // Antipattern 5: Modifying __proto__ chain
        function Parent() {}
        function Child() {}
        Child.prototype.__proto__ = Parent.prototype;
    }
}