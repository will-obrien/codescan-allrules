// This component is generated to trigger the SonarJS rule: javascript:S1126
import { LightningElement, track } from 'lwc';

export default class s1126Trigger extends LightningElement {
    // Rule: Return of boolean expressions should not be wrapped into an "if-then-else" statement
    @track userData = {
        name: 'John Doe',
        age: 25,
        isActive: true,
        hasPermission: false
    };
    
    @track validationResults = [];
    
    connectedCallback() {
        console.log('Triggering SonarJS rule: javascript:S1126 - Return of boolean expressions should not be wrapped into if-then-else statement');
        this.demonstrateRedundantIfElse();
        this.validateUserData();
        this.processBusinessLogic();
        this.handleComplexConditions();
        this.useAntipattern();
    }
    
    // Example 1: Basic redundant if-then-else returning boolean literals - triggers S1126
    demonstrateRedundantIfElse() {
        const user = this.userData;
        
        // BAD: Redundant if-else returning boolean literals - triggers S1126
        if (user.age > 18) {
            return true;    // BAD: Should just return user.age > 18
        } else {
            return false;
        }
    }
    
    // Example 2: Multiple redundant boolean return patterns - triggers S1126
    validateUserData() {
        const user = this.userData;
        
        // BAD: Redundant if-else for name validation - triggers S1126
        if (user.name && user.name.length > 0) {
            return true;    // BAD: Should return user.name && user.name.length > 0
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else for age validation - triggers S1126
    isAdult() {
        if (this.userData.age >= 18) {
            return true;    // BAD: Should return this.userData.age >= 18
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else for permission check - triggers S1126
    hasAccess() {
        if (this.userData.isActive && this.userData.hasPermission) {
            return true;    // BAD: Should return this.userData.isActive && this.userData.hasPermission
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with negation - triggers S1126
    isInactive() {
        if (!this.userData.isActive) {
            return true;    // BAD: Should return !this.userData.isActive
        } else {
            return false;
        }
    }
    
    // Example 3: Complex redundant if-else patterns - triggers S1126
    processBusinessLogic() {
        const user = this.userData;
        const currentTime = Date.now();
        
        // BAD: Redundant if-else with complex condition - triggers S1126
        if (user.age > 21 && user.isActive && user.hasPermission) {
            return true;    // BAD: Should return the entire condition
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with method calls - triggers S1126
    isValidEmail(email) {
        if (email && email.includes('@') && email.includes('.')) {
            return true;    // BAD: Should return the condition directly
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with array operations - triggers S1126
    hasValidItems(items) {
        if (items && items.length > 0 && items.every(item => item != null)) {
            return true;    // BAD: Should return the condition directly
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with object property checks - triggers S1126
    isConfigurationValid(config) {
        if (config && config.apiUrl && config.timeout > 0) {
            return true;    // BAD: Should return the condition directly
        } else {
            return false;
        }
    }
    
    // Example 4: Nested and complex redundant patterns - triggers S1126
    handleComplexConditions() {
        const user = this.userData;
        
        // BAD: Redundant if-else with instanceof - triggers S1126
        if (user instanceof Object) {
            return true;    // BAD: Should return user instanceof Object
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with typeof - triggers S1126
    isString(value) {
        if (typeof value === 'string') {
            return true;    // BAD: Should return typeof value === 'string'
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with array check - triggers S1126
    isArray(value) {
        if (Array.isArray(value)) {
            return true;    // BAD: Should return Array.isArray(value)
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with regular expression - triggers S1126
    isValidPhoneNumber(phone) {
        if (/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
            return true;    // BAD: Should return the test result directly
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with comparison operators - triggers S1126
    isGreaterThan(a, b) {
        if (a > b) {
            return true;    // BAD: Should return a > b
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with equality checks - triggers S1126
    isEqual(a, b) {
        if (a === b) {
            return true;    // BAD: Should return a === b
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with logical operators - triggers S1126
    bothConditionsTrue(condition1, condition2) {
        if (condition1 && condition2) {
            return true;    // BAD: Should return condition1 && condition2
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with OR operator - triggers S1126
    eitherConditionTrue(condition1, condition2) {
        if (condition1 || condition2) {
            return true;    // BAD: Should return condition1 || condition2
        } else {
            return false;
        }
    }
    
    // Example 5: Method variations with redundant if-else - triggers S1126
    
    // BAD: Redundant if-else in getter - triggers S1126
    get isUserValid() {
        if (this.userData.name && this.userData.age > 0) {
            return true;    // BAD: Should return the condition directly
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with ternary alternative - triggers S1126
    canEdit() {
        if (this.userData.isActive && this.userData.hasPermission) {
            return true;    // BAD: Should return the condition or use ternary
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with null checks - triggers S1126
    hasData() {
        if (this.userData != null && this.userData !== undefined) {
            return true;    // BAD: Should return the condition directly
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with length checks - triggers S1126
    hasResults() {
        if (this.validationResults && this.validationResults.length > 0) {
            return true;    // BAD: Should return the condition directly
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with multiple conditions - triggers S1126
    isCompleteProfile() {
        if (this.userData.name && 
            this.userData.age > 0 && 
            this.userData.isActive) {
            return true;    // BAD: Should return the entire condition
        } else {
            return false;
        }
    }
    
    // BAD: Redundant if-else with function calls - triggers S1126
    isProcessingComplete() {
        if (this.isUserValid() && this.hasAccess() && this.hasData()) {
            return true;    // BAD: Should return the condition directly
        } else {
            return false;
        }
    }
    
    // Antipattern for S1126: Return of boolean expressions should not be wrapped into an "if-then-else" statement
    useAntipattern() {
        function check(expression) {
            if (expression) {
                return true;
            } else {
                return false;
            }
        }
    }
}