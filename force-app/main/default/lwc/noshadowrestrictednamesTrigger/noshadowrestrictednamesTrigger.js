// This component is generated to trigger the rule: cs-js:no-shadow-restricted-names
import { LightningElement, track } from 'lwc';

export default class noshadowrestrictednamesTrigger extends LightningElement {
    // Rule: disallow identifiers from shadowing restricted names
    @track processingResults = [];
    
    connectedCallback() {
        console.log('Triggering CSJS rule: cs-js:no-shadow-restricted-names - disallow identifiers from shadowing restricted names');
        this.demonstrateRestrictedNameShadowing();
        this.handleGlobalShadowing();
        this.processWithShadowedNames();
        this.validateRestrictedNames();
    }
    
    // Example 1: Shadowing ES5 global property names - triggers cs-js:no-shadow-restricted-names
    demonstrateRestrictedNameShadowing() {
        // BAD: Shadowing NaN - triggers cs-js:no-shadow-restricted-names
        const NaN = 'not a number';  // BAD: Shadows global NaN
        console.log('Local NaN:', NaN);
        
        // BAD: Shadowing Infinity - triggers cs-js:no-shadow-restricted-names
        let Infinity = 100;  // BAD: Shadows global Infinity
        console.log('Local Infinity:', Infinity);
        
        // BAD: Shadowing undefined - triggers cs-js:no-shadow-restricted-names
        var undefined = 'defined value';  // BAD: Shadows global undefined
        console.log('Local undefined:', undefined);
        
        // BAD: Using shadowed names in operations - triggers cs-js:no-shadow-restricted-names
        if (NaN === 'not a number') {
            console.log('NaN is shadowed');
        }
        
        if (Infinity < 1000) {
            console.log('Infinity is shadowed');
        }
        
        if (undefined !== void 0) {
            console.log('undefined is shadowed');
        }
    }
    
    // Example 2: Shadowing in function parameters - triggers cs-js:no-shadow-restricted-names
    handleGlobalShadowing() {
        // BAD: Function with NaN parameter - triggers cs-js:no-shadow-restricted-names
        const processNaN = function(NaN) {  // BAD: Parameter shadows global NaN
            console.log('Processing NaN:', NaN);
            return NaN * 2;
        };
        
        // BAD: Function with Infinity parameter - triggers cs-js:no-shadow-restricted-names
        const processInfinity = function(Infinity) {  // BAD: Parameter shadows global Infinity
            console.log('Processing Infinity:', Infinity);
            return Infinity + 1;
        };
        
        // BAD: Function with undefined parameter - triggers cs-js:no-shadow-restricted-names
        const processUndefined = function(undefined) {  // BAD: Parameter shadows global undefined
            console.log('Processing undefined:', undefined);
            return undefined || 'default';
        };
        
        // BAD: Arrow functions with shadowed parameters - triggers cs-js:no-shadow-restricted-names
        const arrowNaN = (NaN) => {  // BAD: Parameter shadows global NaN
            return NaN.toString();
        };
        
        const arrowInfinity = (Infinity) => {  // BAD: Parameter shadows global Infinity
            return Infinity / 2;
        };
        
        const arrowUndefined = (undefined) => {  // BAD: Parameter shadows global undefined
            return undefined === null;
        };
        
        // Test the functions
        console.log('NaN result:', processNaN(42));
        console.log('Infinity result:', processInfinity(1000));
        console.log('undefined result:', processUndefined('test'));
        console.log('Arrow NaN:', arrowNaN(123));
        console.log('Arrow Infinity:', arrowInfinity(500));
        console.log('Arrow undefined:', arrowUndefined('value'));
    }
    
    // Example 3: Shadowing in nested scopes - triggers cs-js:no-shadow-restricted-names
    processWithShadowedNames() {
        // BAD: Shadowing in block scopes - triggers cs-js:no-shadow-restricted-names
        if (true) {
            const NaN = 'block NaN';  // BAD: Shadows global NaN in block scope
            let Infinity = 'block Infinity';  // BAD: Shadows global Infinity in block scope
            var undefined = 'block undefined';  // BAD: Shadows global undefined
            
            console.log('Block scope:', NaN, Infinity, undefined);
        }
        
        // BAD: Shadowing in for loops - triggers cs-js:no-shadow-restricted-names
        for (let NaN = 0; NaN < 3; NaN++) {  // BAD: Loop variable shadows global NaN
            console.log('Loop NaN:', NaN);
        }
        
        for (let Infinity = 10; Infinity > 0; Infinity--) {  // BAD: Loop variable shadows global Infinity
            console.log('Loop Infinity:', Infinity);
        }
        
        // BAD: Shadowing in for-in loops - triggers cs-js:no-shadow-restricted-names
        const obj = { a: 1, b: 2, c: 3 };
        for (const undefined in obj) {  // BAD: Loop variable shadows global undefined
            console.log('Property undefined:', undefined, obj[undefined]);
        }
        
        // BAD: Shadowing in for-of loops - triggers cs-js:no-shadow-restricted-names
        const arr = [1, 2, 3];
        for (const NaN of arr) {  // BAD: Loop variable shadows global NaN
            console.log('Array NaN:', NaN);
        }
        
        // BAD: Shadowing in try-catch - triggers cs-js:no-shadow-restricted-names
        try {
            throw new Error('Test error');
        } catch (undefined) {  // BAD: Catch parameter shadows global undefined
            console.log('Caught undefined:', undefined.message);
        }
        
        try {
            throw new Error('Another error');
        } catch (NaN) {  // BAD: Catch parameter shadows global NaN
            console.log('Caught NaN:', NaN.message);
        }
    }
    
    // Example 4: Shadowing in method definitions - triggers cs-js:no-shadow-restricted-names
    validateRestrictedNames() {
        const validator = {
            // BAD: Method with shadowed parameter - triggers cs-js:no-shadow-restricted-names
            checkNaN: function(NaN) {  // BAD: Parameter shadows global NaN
                return typeof NaN === 'number';
            },
            
            // BAD: Method with shadowed parameter - triggers cs-js:no-shadow-restricted-names
            checkInfinity: function(Infinity) {  // BAD: Parameter shadows global Infinity
                return Infinity > 1000000;
            },
            
            // BAD: Method with shadowed parameter - triggers cs-js:no-shadow-restricted-names
            checkUndefined: function(undefined) {  // BAD: Parameter shadows global undefined
                return undefined == null;
            }
        };
        
        // BAD: Object method shorthand with shadowed parameters - triggers cs-js:no-shadow-restricted-names
        const processor = {
            processNaN(NaN) {  // BAD: Parameter shadows global NaN
                return NaN + 1;
            },
            
            processInfinity(Infinity) {  // BAD: Parameter shadows global Infinity
                return Infinity - 1;
            },
            
            processUndefined(undefined) {  // BAD: Parameter shadows global undefined
                return undefined || 'fallback';
            }
        };
        
        // Test the validators and processors
        console.log('Validator NaN:', validator.checkNaN(42));
        console.log('Validator Infinity:', validator.checkInfinity(2000000));
        console.log('Validator undefined:', validator.checkUndefined(null));
        
        console.log('Processor NaN:', processor.processNaN(10));
        console.log('Processor Infinity:', processor.processInfinity(1000));
        console.log('Processor undefined:', processor.processUndefined('test'));
    }
    
    // Example 5: Class methods with shadowed names - triggers cs-js:no-shadow-restricted-names
    
    // BAD: Method with shadowed parameter - triggers cs-js:no-shadow-restricted-names
    handleNaN(NaN) {  // BAD: Parameter shadows global NaN
        console.log('Handling NaN:', NaN);
        return isNaN(NaN);  // This uses the global isNaN function
    }
    
    // BAD: Method with shadowed parameter - triggers cs-js:no-shadow-restricted-names
    handleInfinity(Infinity) {  // BAD: Parameter shadows global Infinity
        console.log('Handling Infinity:', Infinity);
        return isFinite(Infinity);  // This uses the global isFinite function
    }
    
    // BAD: Method with shadowed parameter - triggers cs-js:no-shadow-restricted-names
    handleUndefined(undefined) {  // BAD: Parameter shadows global undefined
        console.log('Handling undefined:', undefined);
        return undefined === void 0;
    }
    
    // BAD: Multiple parameters with shadowed names - triggers cs-js:no-shadow-restricted-names
    processAll(NaN, Infinity, undefined) {  // BAD: All parameters shadow global names
        const results = {
            nanResult: this.handleNaN(NaN),
            infinityResult: this.handleInfinity(Infinity),
            undefinedResult: this.handleUndefined(undefined)
        };
        
        this.processingResults.push(results);
        return results;
    }
    
    // BAD: Getter with local shadowed variable - triggers cs-js:no-shadow-restricted-names
    get processedCount() {
        const undefined = this.processingResults.length;  // BAD: Shadows global undefined
        return undefined > 0 ? undefined : 0;
    }
    
    // BAD: Setter with shadowed parameter - triggers cs-js:no-shadow-restricted-names
    set maxResults(Infinity) {  // BAD: Parameter shadows global Infinity
        if (Infinity > 0) {
            console.log('Setting max results to:', Infinity);
        }
    }
}