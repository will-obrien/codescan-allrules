// This component is generated to trigger the rule: cs-js:no-rest-parameter
import { LightningElement } from 'lwc';

export default class norestparameterTrigger extends LightningElement {
    // Rule: disallow rest parameters
    
    connectedCallback() {
        // This component triggers: cs-js:no-rest-parameter
        console.log('Triggering rule: cs-js:no-rest-parameter');
        
        // Antipattern 1: Function with rest parameter
        this.functionWithRest(1, 2, 3, 4, 5);
        
        // Antipattern 2: Arrow function with rest parameter
        this.arrowWithRest(1, 2, 3);
        
        // Antipattern 3: Method with rest parameter
        this.methodWithRest('a', 'b', 'c');
        
        // Antipattern 4: Constructor-like function with rest parameter
        this.constructorWithRest('param1', 'param2', 'param3');
    }
    
    // Antipattern 5: Method definition with rest parameter
    functionWithRest(...args) { // Violation: using rest parameter
        console.log('Function with rest args:', args);
        return args.length;
    }
    
    // Antipattern 6: Arrow function with rest parameter
    arrowWithRest = (...params) => { // Violation: arrow function with rest parameter
        console.log('Arrow function with rest params:', params);
        return params.join(', ');
    }
    
    // Antipattern 7: Method with rest parameter
    methodWithRest(...items) { // Violation: method with rest parameter
        console.log('Method with rest items:', items);
        return items.map(item => item.toUpperCase());
    }
    
    // Antipattern 8: Function with named parameters and rest
    mixedParameters(first, second, ...rest) { // Violation: mixed parameters with rest
        console.log('First:', first, 'Second:', second, 'Rest:', rest);
        return { first, second, rest };
    }
    
    // Antipattern 9: Constructor-like function with rest
    constructorWithRest(...config) { // Violation: constructor with rest parameter
        console.log('Constructor config:', config);
        this.config = config;
        return this;
    }
    
    // Antipattern 10: Nested function with rest parameter
    outerFunction() {
        // Antipattern 11: Inner function with rest parameter
        function innerWithRest(...nested) { // Violation: inner function with rest
            console.log('Inner function with rest:', nested);
            return nested.reverse();
        }
        
        return innerWithRest(1, 2, 3, 4);
    }
    
    handleClick() {
        // Antipattern 12: Event handler using rest parameters
        this.eventHandlerWithRest('event', 'data', 'extra');
        this.mixedParameters('first', 'second', 'third', 'fourth');
        this.outerFunction();
    }
    
    // Antipattern 13: Event handler method with rest parameter
    eventHandlerWithRest(...eventData) { // Violation: event handler with rest
        console.log('Event handler with rest data:', eventData);
        return eventData.filter(data => data !== null);
    }
}
