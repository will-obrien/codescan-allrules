// This component is generated to trigger the rule: cs-js:no-catch-shadow
import { LightningElement, track } from 'lwc';

export default class nocatchshadowTrigger extends LightningElement {
    // Rule: disallow `catch` clause parameters from shadowing variables in the outer scope
    @track errorLog = [];
    @track processingStatus = 'idle';
    
    connectedCallback() {
        console.log('Triggering CSJS rule: cs-js:no-catch-shadow - disallow catch clause parameters from shadowing variables in the outer scope');
        this.demonstrateCatchShadowing();
        this.handleAsyncOperations();
        this.processDataWithErrorHandling();
        this.validateUserInput();
    }
    
    // Example 1: Basic catch parameter shadowing - triggers cs-js:no-catch-shadow
    demonstrateCatchShadowing() {
        const error = 'initial error value';  // Variable in outer scope
        const result = 'initial result';      // Variable in outer scope
        const data = { value: 'initial data' }; // Variable in outer scope
        
        try {
            // Simulate some operation that might throw
            throw new Error('Something went wrong');
        } catch (error) {  // BAD: 'error' parameter shadows outer scope variable - triggers cs-js:no-catch-shadow
            console.log('Caught error:', error.message);
            // This shadows the outer 'error' variable
        }
        
        try {
            // Another operation
            JSON.parse('invalid json');
        } catch (result) {  // BAD: 'result' parameter shadows outer scope variable - triggers cs-js:no-catch-shadow
            console.log('JSON parsing failed:', result);
            // This shadows the outer 'result' variable
        }
        
        try {
            // Third operation
            throw new TypeError('Type error occurred');
        } catch (data) {  // BAD: 'data' parameter shadows outer scope variable - triggers cs-js:no-catch-shadow
            console.log('Type error:', data.message);
            // This shadows the outer 'data' variable
        }
        
        // The original variables are still accessible here
        console.log('Original error:', error);
        console.log('Original result:', result);
        console.log('Original data:', data);
    }
    
    // Example 2: Function-level variable shadowing in catch - triggers cs-js:no-catch-shadow
    handleAsyncOperations() {
        const response = null;        // Function scope variable
        const status = 'pending';     // Function scope variable
        const callback = () => {};    // Function scope variable
        
        // First async operation
        try {
            // Simulate API call
            throw new Error('Network error');
        } catch (response) {  // BAD: Shadows function-level 'response' variable - triggers cs-js:no-catch-shadow
            console.log('Network error response:', response);
            this.errorLog.push(response.message);
        }
        
        // Second async operation
        try {
            // Simulate status check
            throw new Error('Status check failed');
        } catch (status) {  // BAD: Shadows function-level 'status' variable - triggers cs-js:no-catch-shadow
            console.log('Status error:', status);
            this.processingStatus = 'error';
        }
        
        // Third async operation
        try {
            // Simulate callback execution
            throw new Error('Callback execution failed');
        } catch (callback) {  // BAD: Shadows function-level 'callback' variable - triggers cs-js:no-catch-shadow
            console.log('Callback error:', callback);
        }
        
        // Original variables are still accessible
        console.log('Original response:', response);
        console.log('Original status:', status);
        console.log('Original callback type:', typeof callback);
    }
    
    // Example 3: Method-level shadowing with multiple catch blocks - triggers cs-js:no-catch-shadow
    processDataWithErrorHandling() {
        const exception = 'method-level exception';  // Method scope variable
        const err = 'method-level error';            // Method scope variable
        const failure = 'method-level failure';      // Method scope variable
        
        const operations = [
            () => { throw new Error('Operation 1 failed'); },
            () => { throw new TypeError('Operation 2 type error'); },
            () => { throw new ReferenceError('Operation 3 reference error'); }
        ];
        
        // Process each operation with shadowing catch parameters
        operations.forEach((operation, index) => {
            try {
                operation();
            } catch (exception) {  // BAD: Shadows method-level 'exception' variable - triggers cs-js:no-catch-shadow
                console.log(`Operation ${index + 1} exception:`, exception.message);
            }
        });
        
        // Another set of operations
        try {
            // Simulate data parsing
            JSON.parse('{ invalid json }');
        } catch (err) {  // BAD: Shadows method-level 'err' variable - triggers cs-js:no-catch-shadow
            console.log('Parsing error:', err);
        }
        
        try {
            // Simulate validation
            throw new Error('Validation failed');
        } catch (failure) {  // BAD: Shadows method-level 'failure' variable - triggers cs-js:no-catch-shadow
            console.log('Validation failure:', failure.message);
        }
        
        // Original variables remain accessible
        console.log('Original exception:', exception);
        console.log('Original err:', err);
        console.log('Original failure:', failure);
    }
    
    // Example 4: Nested scopes with catch shadowing - triggers cs-js:no-catch-shadow
    validateUserInput() {
        const error = 'validation error';     // Method scope
        const message = 'validation message'; // Method scope
        
        const validators = [
            (input) => {
                const error = 'validator error';  // Inner scope variable
                
                try {
                    if (!input) throw new Error('Input required');
                    return true;
                } catch (error) {  // BAD: Shadows both method and inner scope 'error' - triggers cs-js:no-catch-shadow
                    console.log('Validation error:', error);
                    return false;
                }
            },
            
            (input) => {
                const message = 'validator message'; // Inner scope variable
                
                try {
                    if (input.length < 3) throw new Error('Input too short');
                    return true;
                } catch (message) {  // BAD: Shadows both method and inner scope 'message' - triggers cs-js:no-catch-shadow
                    console.log('Length validation message:', message);
                    return false;
                }
            }
        ];
        
        // Test the validators
        validators.forEach(validator => {
            try {
                validator('ab');
            } catch (error) {  // BAD: Shadows method-level 'error' variable - triggers cs-js:no-catch-shadow
                console.log('Validator execution error:', error);
            }
        });
        
        // Complex nested try-catch with shadowing
        try {
            try {
                throw new Error('Inner error');
            } catch (message) {  // BAD: Shadows method-level 'message' variable - triggers cs-js:no-catch-shadow
                console.log('Inner catch message:', message);
                throw new Error('Re-thrown error');
            }
        } catch (error) {  // BAD: Shadows method-level 'error' variable - triggers cs-js:no-catch-shadow
            console.log('Outer catch error:', error);
        }
        
        console.log('Final error:', error);
        console.log('Final message:', message);
    }
    
    // Example 5: Class-level property shadowing - triggers cs-js:no-catch-shadow
    handleClassPropertyShadowing() {
        // These shadow class properties
        try {
            throw new Error('Error log test');
        } catch (errorLog) {  // BAD: Shadows class property 'this.errorLog' - triggers cs-js:no-catch-shadow
            console.log('Caught errorLog:', errorLog);
        }
        
        try {
            throw new Error('Processing status test');
        } catch (processingStatus) {  // BAD: Shadows class property 'this.processingStatus' - triggers cs-js:no-catch-shadow
            console.log('Caught processingStatus:', processingStatus);
        }
    }
    
    // Helper method with parameter shadowing - triggers cs-js:no-catch-shadow
    processWithErrorHandling(error, callback) {  // Parameters in outer scope
        try {
            callback();
        } catch (error) {  // BAD: Shadows parameter 'error' - triggers cs-js:no-catch-shadow
            console.log('Callback error:', error);
        }
        
        try {
            throw new Error('Processing error');
        } catch (callback) {  // BAD: Shadows parameter 'callback' - triggers cs-js:no-catch-shadow
            console.log('Processing callback error:', callback);
        }
    }
    
    // Getter with catch shadowing - triggers cs-js:no-catch-shadow
    get errorCount() {
        const count = this.errorLog.length;
        
        try {
            // Simulate error in getter
            throw new Error('Getter error');
        } catch (count) {  // BAD: Shadows local 'count' variable - triggers cs-js:no-catch-shadow
            console.log('Getter error count:', count);
            return 0;
        }
        
        return count;
    }
}