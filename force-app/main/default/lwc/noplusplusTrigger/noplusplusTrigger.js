// This component is generated to trigger the rule: cs-js:no-plusplus
import { LightningElement, track } from 'lwc';

export default class noplusplusTrigger extends LightningElement {
    // Rule: disallow the unary operators `++` and `--`
    @track counters = {
        clicks: 0,
        views: 0,
        errors: 0
    };
    
    @track statistics = [];
    
    connectedCallback() {
        console.log('Triggering CSJS rule: cs-js:no-plusplus - disallow the unary operators ++ and --');
        this.demonstrateIncrementOperators();
        this.handleLoopCounters();
        this.processArrayOperations();
        this.manageStatistics();
    }
    
    // Example 1: Basic increment and decrement operators - triggers cs-js:no-plusplus
    demonstrateIncrementOperators() {
        let counter = 0;
        let index = 10;
        let total = 100;
        
        // BAD: Using ++ operator - triggers cs-js:no-plusplus
        counter++;  // BAD: Post-increment operator
        ++counter;  // BAD: Pre-increment operator
        
        // BAD: Using -- operator - triggers cs-js:no-plusplus
        index--;    // BAD: Post-decrement operator
        --index;    // BAD: Pre-decrement operator
        
        // BAD: Using operators in expressions - triggers cs-js:no-plusplus
        const result1 = counter++ + 5;  // BAD: Post-increment in expression
        const result2 = ++total - 10;   // BAD: Pre-increment in expression
        const result3 = --index * 2;    // BAD: Pre-decrement in expression
        const result4 = total-- / 3;    // BAD: Post-decrement in expression
        
        // BAD: Multiple operators in one statement - triggers cs-js:no-plusplus
        counter++; index--; total++;    // BAD: Multiple increment/decrement operators
        
        console.log('Counter:', counter, 'Index:', index, 'Total:', total);
        console.log('Results:', result1, result2, result3, result4);
    }
    
    // Example 2: Increment/decrement in loops - triggers cs-js:no-plusplus
    handleLoopCounters() {
        const items = ['item1', 'item2', 'item3', 'item4', 'item5'];
        const numbers = [10, 20, 30, 40, 50];
        
        // BAD: Using ++ in for loop - triggers cs-js:no-plusplus
        for (let i = 0; i < items.length; i++) {  // BAD: i++ in for loop
            console.log('Item:', items[i]);
        }
        
        // BAD: Using -- in reverse loop - triggers cs-js:no-plusplus
        for (let j = numbers.length - 1; j >= 0; j--) {  // BAD: j-- in for loop
            console.log('Number:', numbers[j]);
        }
        
        // BAD: Using operators in while loops - triggers cs-js:no-plusplus
        let count = 0;
        while (count < 5) {
            console.log('Count:', count);
            count++;  // BAD: Increment in while loop
        }
        
        let countdown = 10;
        while (countdown > 0) {
            console.log('Countdown:', countdown);
            countdown--;  // BAD: Decrement in while loop
        }
        
        // BAD: Using operators in complex loop conditions - triggers cs-js:no-plusplus
        let x = 0, y = 10;
        while (x++ < 5 && y-- > 5) {  // BAD: Both ++ and -- in condition
            console.log('x:', x, 'y:', y);
        }
        
        // BAD: Nested loops with increment operators - triggers cs-js:no-plusplus
        for (let outer = 0; outer < 3; outer++) {  // BAD: outer++ in for loop
            for (let inner = 0; inner < 2; inner++) {  // BAD: inner++ in for loop
                console.log('Nested:', outer, inner);
            }
        }
    }
    
    // Example 3: Array and object operations with increment/decrement - triggers cs-js:no-plusplus
    processArrayOperations() {
        const data = [1, 2, 3, 4, 5];
        const results = [];
        let processingIndex = 0;
        let errorCount = 0;
        
        // BAD: Using ++ in array processing - triggers cs-js:no-plusplus
        while (processingIndex < data.length) {
            const value = data[processingIndex];
            
            if (value > 3) {
                errorCount++;  // BAD: Increment error counter
            }
            
            results.push(value * 2);
            processingIndex++;  // BAD: Increment index
        }
        
        // BAD: Using operators in array methods - triggers cs-js:no-plusplus
        let callbackCounter = 0;
        data.forEach(item => {
            callbackCounter++;  // BAD: Increment in callback
            console.log('Processing item:', item, 'Callback count:', callbackCounter);
        });
        
        // BAD: Using operators in array reduction - triggers cs-js:no-plusplus
        let reduceCounter = 0;
        const sum = data.reduce((acc, val) => {
            reduceCounter++;  // BAD: Increment in reduce callback
            return acc + val;
        }, 0);
        
        // BAD: Object property manipulation with operators - triggers cs-js:no-plusplus
        this.counters.clicks++;    // BAD: Increment object property
        this.counters.views++;     // BAD: Increment object property
        this.counters.errors--;    // BAD: Decrement object property
        
        console.log('Processing results:', results);
        console.log('Error count:', errorCount);
        console.log('Sum:', sum, 'Reduce counter:', reduceCounter);
    }
    
    // Example 4: Complex expressions with increment/decrement - triggers cs-js:no-plusplus
    manageStatistics() {
        let successCount = 0;
        let failureCount = 0;
        let retryCount = 3;
        const maxRetries = 5;
        
        // BAD: Using operators in conditional expressions - triggers cs-js:no-plusplus
        const operations = [
            () => Math.random() > 0.5,
            () => Math.random() > 0.3,
            () => Math.random() > 0.7
        ];
        
        operations.forEach(operation => {
            let attempts = 0;
            let success = false;
            
            while (attempts++ < maxRetries && !success) {  // BAD: ++ in while condition
                if (operation()) {
                    success = true;
                    successCount++;  // BAD: Increment success counter
                } else {
                    failureCount++;  // BAD: Increment failure counter
                }
            }
            
            if (!success) {
                retryCount--;  // BAD: Decrement retry count
            }
        });
        
        // BAD: Using operators in ternary expressions - triggers cs-js:no-plusplus
        const status = successCount > failureCount ? successCount++ : failureCount++;  // BAD: ++ in ternary
        
        // BAD: Using operators in function calls - triggers cs-js:no-plusplus
        this.updateStatistics(successCount++, failureCount++);  // BAD: ++ in function arguments
        
        // BAD: Using operators in array/object literals - triggers cs-js:no-plusplus
        this.statistics.push({
            id: this.statistics.length++,  // BAD: ++ in object property
            success: successCount,
            failure: failureCount,
            timestamp: Date.now()
        });
        
        // BAD: Chained increment operations - triggers cs-js:no-plusplus
        let a = 1, b = 2, c = 3;
        const chainResult = (a++) + (++b) - (c--) + (--a);  // BAD: Multiple operators in expression
        
        console.log('Statistics:', { successCount, failureCount, retryCount });
        console.log('Chain result:', chainResult);
    }
    
    // Helper method with increment/decrement - triggers cs-js:no-plusplus
    updateStatistics(success, failure) {
        let totalOperations = 0;
        
        // BAD: Using operators in method - triggers cs-js:no-plusplus
        totalOperations++;  // BAD: Increment total
        
        if (success > failure) {
            this.counters.clicks++;  // BAD: Increment clicks
        } else {
            this.counters.errors++;  // BAD: Increment errors
        }
        
        return totalOperations++;  // BAD: Post-increment in return
    }
    
    // Event handler with increment/decrement - triggers cs-js:no-plusplus
    handleClick() {
        let clickCount = 0;
        
        // BAD: Using operators in event handler - triggers cs-js:no-plusplus
        clickCount++;  // BAD: Increment click count
        this.counters.views++;  // BAD: Increment views
        
        // BAD: Using operators in event processing - triggers cs-js:no-plusplus
        for (let i = 0; i < 3; i++) {  // BAD: i++ in event handler loop
            console.log('Processing click event:', i);
        }
    }
    
    // Getter with increment/decrement - triggers cs-js:no-plusplus
    get totalCount() {
        let total = 0;
        
        // BAD: Using operators in getter - triggers cs-js:no-plusplus
        total++;  // BAD: Increment in getter
        total += this.counters.clicks++;  // BAD: Post-increment in calculation
        
        return total;
    }
    
    // Setter with increment/decrement - triggers cs-js:no-plusplus
    set clickCount(value) {
        // BAD: Using operators in setter - triggers cs-js:no-plusplus
        this.counters.clicks = value++;  // BAD: Post-increment in assignment
    }
}