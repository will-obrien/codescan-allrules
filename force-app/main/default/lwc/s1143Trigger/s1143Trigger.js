// This component is generated to trigger the SonarJS rule: javascript:S1143
import { LightningElement, track } from 'lwc';

export default class s1143Trigger extends LightningElement {
    // Rule: Jump statements should not occur in "finally" blocks
    @track processingResults = [];
    @track errorLog = [];
    
    connectedCallback() {
        console.log('Triggering SonarJS rule: javascript:S1143 - Jump statements should not occur in finally blocks');
        this.demonstrateJumpInFinally();
        this.processDataWithFinally();
        this.handleComplexFinally();
        this.validateWithFinally();
    }
    
    // Example 1: Return statements in finally blocks - triggers S1143
    demonstrateJumpInFinally() {
        // BAD: Return in finally block - triggers S1143
        try {
            console.log('Processing operation 1');
            throw new Error('Test error');
        } catch (error) {
            console.log('Caught error:', error.message);
            return false;
        } finally {
            console.log('Finally block executed');
            return true;  // BAD: Return in finally block - triggers S1143
        }
    }
    
    // Example 2: Multiple jump statements in finally - triggers S1143
    processDataWithFinally() {
        const data = [1, 2, 3, 4, 5];
        
        for (let i = 0; i < data.length; i++) {
            try {
                if (data[i] === 3) {
                    throw new Error('Invalid data');
                }
                console.log('Processing:', data[i]);
            } catch (error) {
                console.log('Error processing item:', error.message);
            } finally {
                console.log('Cleanup for item:', data[i]);
                if (data[i] === 2) {
                    continue;  // BAD: Continue in finally block - triggers S1143
                }
                if (data[i] === 4) {
                    break;     // BAD: Break in finally block - triggers S1143
                }
            }
        }
    }
    
    // Example 3: Throw statements in finally blocks - triggers S1143
    handleComplexFinally() {
        const operations = ['op1', 'op2', 'op3'];
        
        for (const operation of operations) {
            try {
                console.log('Executing:', operation);
                if (operation === 'op2') {
                    throw new Error('Operation failed');
                }
            } catch (error) {
                console.log('Operation error:', error.message);
            } finally {
                console.log('Finalizing:', operation);
                if (operation === 'op3') {
                    throw new Error('Finally error');  // BAD: Throw in finally block - triggers S1143
                }
            }
        }
    }
    
    // Example 4: Return statements masking exceptions - triggers S1143
    validateWithFinally() {
        try {
            this.performValidation();
            return 'validation-success';
        } catch (error) {
            console.error('Validation failed:', error);
            return 'validation-failed';
        } finally {
            console.log('Validation cleanup');
            return 'validation-complete';  // BAD: Return in finally masks the actual result - triggers S1143
        }
    }
    
    performValidation() {
        throw new Error('Validation error');
    }
    
    // Example 5: Nested try-catch with finally jump statements - triggers S1143
    processNestedOperations() {
        const items = ['item1', 'item2', 'item3'];
        
        for (let i = 0; i < items.length; i++) {
            try {
                console.log('Outer try:', items[i]);
                
                try {
                    console.log('Inner try:', items[i]);
                    if (items[i] === 'item2') {
                        throw new Error('Inner error');
                    }
                } catch (innerError) {
                    console.log('Inner catch:', innerError.message);
                } finally {
                    console.log('Inner finally');
                    if (items[i] === 'item2') {
                        continue;  // BAD: Continue in finally block - triggers S1143
                    }
                }
                
            } catch (outerError) {
                console.log('Outer catch:', outerError.message);
            } finally {
                console.log('Outer finally');
                if (items[i] === 'item3') {
                    break;  // BAD: Break in finally block - triggers S1143
                }
            }
        }
    }
    
    // Example 6: Method with finally return - triggers S1143
    calculateResult() {
        let result = 0;
        
        try {
            result = 10 / 0;
            return result;
        } catch (error) {
            console.error('Calculation error:', error);
            return -1;
        } finally {
            console.log('Calculation cleanup');
            return 0;  // BAD: Return in finally masks the actual calculation result - triggers S1143
        }
    }
    
    // Example 7: Finally with conditional jumps - triggers S1143
    processConditionalJumps(condition) {
        const values = [1, 2, 3, 4, 5];
        
        for (const value of values) {
            try {
                console.log('Processing value:', value);
                if (value === 3) {
                    throw new Error('Value 3 error');
                }
            } catch (error) {
                console.log('Value error:', error.message);
            } finally {
                console.log('Value cleanup:', value);
                
                if (condition && value === 2) {
                    return value;  // BAD: Conditional return in finally - triggers S1143
                }
                
                if (!condition && value === 4) {
                    throw new Error('Conditional finally error');  // BAD: Conditional throw in finally - triggers S1143
                }
            }
        }
    }
    
    // Example 8: Finally with switch statement jumps - triggers S1143
    processSwitchInFinally(type) {
        try {
            console.log('Processing type:', type);
            this.executeOperation(type);
        } catch (error) {
            console.error('Operation error:', error);
        } finally {
            console.log('Operation cleanup');
            
            switch (type) {
                case 'critical':
                    throw new Error('Critical operation requires attention');  // BAD: Throw in finally - triggers S1143
                case 'warning':
                    return 'warning-handled';  // BAD: Return in finally - triggers S1143
                case 'info':
                    break;  // This break is for the switch, but in finally context it's still problematic
                default:
                    return 'default-handled';  // BAD: Return in finally - triggers S1143
            }
        }
    }
    
    executeOperation(type) {
        if (type === 'error') {
            throw new Error('Operation failed');
        }
        console.log('Operation executed:', type);
    }
    
    // Example 9: Finally with loop control - triggers S1143
    processLoopControl() {
        const data = [10, 20, 30, 40, 50];
        
        outerLoop: for (let i = 0; i < data.length; i++) {
            try {
                console.log('Outer loop iteration:', i);
                
                innerLoop: for (let j = 0; j < 3; j++) {
                    try {
                        console.log('Inner loop iteration:', j);
                        if (j === 1) {
                            throw new Error('Inner loop error');
                        }
                    } catch (error) {
                        console.log('Inner loop error:', error.message);
                    } finally {
                        console.log('Inner loop cleanup');
                        if (j === 2) {
                            continue outerLoop;  // BAD: Continue with label in finally - triggers S1143
                        }
                    }
                }
                
            } catch (error) {
                console.log('Outer loop error:', error.message);
            } finally {
                console.log('Outer loop cleanup');
                if (i === 3) {
                    break outerLoop;  // BAD: Break with label in finally - triggers S1143
                }
            }
        }
    }
    
    // Example 10: Finally with function returns - triggers S1143
    processWithCallback(callback) {
        try {
            console.log('Executing callback');
            const result = callback();
            return result;
        } catch (error) {
            console.error('Callback error:', error);
            return null;
        } finally {
            console.log('Callback cleanup');
            
            // BAD: Return in finally prevents proper cleanup and masks results - triggers S1143
            return 'callback-processed';
        }
    }
    
    // Example 11: Async operation with finally jumps - triggers S1143
    async processAsyncWithFinally() {
        try {
            console.log('Starting async operation');
            await this.simulateAsyncOperation();
            return 'async-success';
        } catch (error) {
            console.error('Async error:', error);
            return 'async-error';
        } finally {
            console.log('Async cleanup');
            return 'async-finally';  // BAD: Return in finally masks async result - triggers S1143
        }
    }
    
    async simulateAsyncOperation() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Async operation failed'));
            }, 100);
        });
    }
    
    // Example 12: Finally with error propagation - triggers S1143
    handleErrorPropagation() {
        try {
            console.log('Starting error propagation test');
            throw new Error('Original error');
        } catch (error) {
            console.error('Caught original error:', error.message);
            throw new Error('Rethrown error');
        } finally {
            console.log('Error propagation cleanup');
            throw new Error('Finally error masks rethrown error');  // BAD: Throw in finally masks the rethrown error - triggers S1143
        }
    }
}