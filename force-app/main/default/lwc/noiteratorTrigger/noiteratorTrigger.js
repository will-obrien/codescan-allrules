// This component is generated to trigger the rule: cs-js:no-iterator
import { LightningElement } from 'lwc';

export default class noiteratorTrigger extends LightningElement {
    // Rule: disallow the use of the `__iterator__` property
    connectedCallback() {
        // This component triggers: cs-js:no-iterator
        console.log('Triggering rule: cs-js:no-iterator');
        
        // Antipattern 1: Defining __iterator__ on prototype
        function Foo() {}
        Foo.prototype.__iterator__ = function() {
            return new FooIterator(this);
        };
        
        // Antipattern 2: Setting __iterator__ on object
        let obj = {};
        obj.__iterator__ = function () {};
        
        // Antipattern 3: Using bracket notation for __iterator__
        let foo = {};
        foo["__iterator__"] = function () {};
        
        // Antipattern 4: Accessing __iterator__ property
        let bar = {};
        bar.__iterator__ = function() {
            return { next: function() { return { done: true }; } };
        };
    }
}