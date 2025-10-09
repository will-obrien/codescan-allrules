// This component is generated to trigger the rule: cs-js:eqeqeq
import { LightningElement, track } from 'lwc';

export default class eqeqeqTrigger extends LightningElement {
    // Rule: require the use of `===` and `!==`
    @track userData = {
        name: 'John Doe',
        age: 25,
        isActive: true,
        score: null
    };
    
    @track comparisonResults = [];
    
    connectedCallback() {
        console.log('Triggering CSJS rule: cs-js:eqeqeq - require the use of === and !==');
        this.performLooseComparisons();
        this.handleUserValidation();
        this.processDataComparisons();
        this.demonstrateTypeCoercion();
    }
    
    // Example 1: Basic loose equality comparisons - triggers cs-js:eqeqeq
    performLooseComparisons() {
        const value1 = 5;
        const value2 = '5';
        const value3 = true;
        const value4 = 1;
        
        // BAD: Using == instead of === - triggers cs-js:eqeqeq
        if (value1 == value2) {  // BAD: Should use === for strict comparison
            console.log('Number equals string (type coercion)');
        }
        
        // BAD: Using != instead of !== - triggers cs-js:eqeqeq
        if (value1 != value3) {  // BAD: Should use !== for strict comparison
            console.log('Number not equal to boolean');
        }
        
        // BAD: More loose equality comparisons - triggers cs-js:eqeqeq
        const isEqual = (value3 == value4);  // BAD: true == 1 with type coercion
        const isNotEqual = (value2 != value1);  // BAD: '5' != 5 comparison
        
        // BAD: Loose comparisons with null/undefined - triggers cs-js:eqeqeq
        const nullValue = null;
        const undefinedValue = undefined;
        
        if (nullValue == undefinedValue) {  // BAD: null == undefined is true
            console.log('null equals undefined with loose comparison');
        }
        
        if (this.userData.score == null) {  // BAD: Should use === for null check
            console.log('Score is null or undefined');
        }
        
        this.comparisonResults.push(isEqual, isNotEqual);
    }
    
    // Example 2: Loose comparisons in user validation - triggers cs-js:eqeqeq
    handleUserValidation() {
        const user = this.userData;
        const inputAge = '25';  // String from form input
        const inputActive = 1;  // Number representing boolean
        
        // BAD: Comparing different types with == - triggers cs-js:eqeqeq
        if (user.age == inputAge) {  // BAD: number == string comparison
            console.log('Age matches input');
        }
        
        if (user.isActive == inputActive) {  // BAD: boolean == number comparison
            console.log('User is active');
        }
        
        // BAD: Loose inequality comparisons - triggers cs-js:eqeqeq
        if (user.name != '') {  // BAD: Should use !== for string comparison
            console.log('User has a name');
        }
        
        if (user.age != 0) {  // BAD: Should use !== for number comparison
            console.log('User age is not zero');
        }
        
        // BAD: Loose comparisons in complex conditions - triggers cs-js:eqeqeq
        const isValidUser = (user.name != null) && (user.age == inputAge) && (user.isActive == true);
        
        if (isValidUser == true) {  // BAD: Comparing boolean result with == true
            console.log('User validation passed');
        }
    }
    
    // Example 3: Loose comparisons in data processing - triggers cs-js:eqeqeq
    processDataComparisons() {
        const numbers = [1, 2, 3, '4', '5', 0, false, null];
        const strings = ['hello', '', 'world', 0, false];
        
        // BAD: Loose comparisons in array processing - triggers cs-js:eqeqeq
        const matchingNumbers = numbers.filter(num => num == 0);  // BAD: Matches 0, false, '0'
        const nonEmptyStrings = strings.filter(str => str != '');  // BAD: Should use !==
        const truthyValues = numbers.filter(val => val == true);  // BAD: Matches 1, '1', etc.
        
        // BAD: Loose comparisons in array methods - triggers cs-js:eqeqeq
        const hasZero = numbers.some(num => num == 0);  // BAD: Type coercion issues
        const allNonNull = numbers.every(num => num != null);  // BAD: Should use !==
        const foundIndex = numbers.findIndex(num => num == '3');  // BAD: number == string
        
        // BAD: Loose comparisons in loops - triggers cs-js:eqeqeq
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] == false) {  // BAD: Matches 0, '', false, null
                console.log('Found falsy value:', numbers[i]);
            }
            
            if (numbers[i] != undefined) {  // BAD: Should use !==
                console.log('Value is defined:', numbers[i]);
            }
        }
        
        // BAD: Loose comparisons in object processing - triggers cs-js:eqeqeq
        const config = { enabled: 1, mode: 'auto', level: '2' };
        
        if (config.enabled == true) {  // BAD: 1 == true with type coercion
            console.log('Config is enabled');
        }
        
        if (config.level == 2) {  // BAD: '2' == 2 with type coercion
            console.log('Level is 2');
        }
    }
    
    // Example 4: Demonstrating problematic type coercion - triggers cs-js:eqeqeq
    demonstrateTypeCoercion() {
        // BAD: Problematic loose equality cases - triggers cs-js:eqeqeq
        const problematicComparisons = [
            (0 == false),      // BAD: true due to type coercion
            ('' == false),     // BAD: true due to type coercion  
            ('0' == false),    // BAD: true due to type coercion
            (null == undefined), // BAD: true in loose equality
            (1 == true),       // BAD: true due to type coercion
            ('1' == true),     // BAD: true due to type coercion
            ([] == false),     // BAD: true due to type coercion
            ([] == 0),         // BAD: true due to type coercion
        ];
        
        // BAD: Using results in loose comparisons - triggers cs-js:eqeqeq
        problematicComparisons.forEach(result => {
            if (result == true) {  // BAD: Should use === true or just result
                console.log('Comparison was true');
            }
        });
        
        // BAD: More type coercion issues - triggers cs-js:eqeqeq
        const mixedArray = [0, '0', false, '', null, undefined];
        
        for (const item of mixedArray) {
            if (item == 0) {  // BAD: Matches multiple different types
                console.log('Item equals 0 (with coercion):', item);
            }
            
            if (item != true) {  // BAD: Complex type coercion logic
                console.log('Item does not equal true:', item);
            }
        }
        
        // BAD: Loose comparisons in return statements - triggers cs-js:eqeqeq
        return this.validateData() == true;  // BAD: Should use === or just return result
    }
    
    // Helper method with loose comparisons - triggers cs-js:eqeqeq
    validateData() {
        const data = this.userData;
        
        // BAD: Multiple loose comparisons - triggers cs-js:eqeqeq
        return (data.name != '') && (data.age == 25) && (data.isActive == 1);
    }
    
    // BAD: Loose comparisons in getters - triggers cs-js:eqeqeq
    get isUserValid() {
        return (this.userData.name != null) && (this.userData.age == this.userData.age);
    }
    
    // BAD: Loose comparisons in setters - triggers cs-js:eqeqeq
    set userActive(value) {
        this.userData.isActive = (value == true) || (value == 1) || (value == '1');
    }
}