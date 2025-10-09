// This component is generated to trigger the rule: cs-js:valid-track
import { LightningElement, track } from 'lwc';

export default class validtrackTrigger extends LightningElement {
    // Rule: validate @track usage
    
    // Antipattern 1: @track on primitive value (unnecessary)
    @track primitiveValue = 'string'; // Violation: @track on primitive (not needed)
    
    // Antipattern 2: @track on number (unnecessary)
    @track numberValue = 42; // Violation: @track on number (not needed)
    
    // Antipattern 3: @track on boolean (unnecessary)
    @track booleanValue = true; // Violation: @track on boolean (not needed)
    
    // Antipattern 4: @track on null (unnecessary)
    @track nullValue = null; // Violation: @track on null (not needed)
    
    // Antipattern 5: @track on undefined (unnecessary)
    @track undefinedValue = undefined; // Violation: @track on undefined (not needed)
    
    // Antipattern 6: @track on function (invalid)
    @track functionValue = function() { return 'function'; }; // Violation: @track on function
    
    // Antipattern 7: @track on arrow function (invalid)
    @track arrowFunction = () => 'arrow'; // Violation: @track on arrow function
    
    // Antipattern 8: @track on getter (invalid usage)
    @track
    get invalidTrackedGetter() { // Violation: @track on getter
        return this._value;
    }
    
    // Antipattern 9: @track on setter (invalid usage)
    @track
    set invalidTrackedSetter(value) { // Violation: @track on setter
        this._value = value;
    }
    
    // Antipattern 10: @track on method (invalid)
    @track
    invalidTrackedMethod() { // Violation: @track on method
        return 'method result';
    }
    
    connectedCallback() {
        // This component triggers: cs-js:valid-track
        console.log('Triggering rule: cs-js:valid-track');
        
        // Antipattern 11: Reassigning @track primitive (unnecessary tracking)
        this.primitiveValue = 'new string'; // @track not needed for primitives
        this.numberValue = 100; // @track not needed for numbers
        this.booleanValue = false; // @track not needed for booleans
        
        // Antipattern 12: Using @track properties in invalid ways
        this.testTrackUsage();
    }
    
    testTrackUsage() {
        // Antipattern 13: Calling @track function
        const result = this.functionValue(); // Calling @track function
        console.log('Function result:', result);
        
        // Antipattern 14: Calling @track arrow function
        const arrowResult = this.arrowFunction(); // Calling @track arrow function
        console.log('Arrow result:', arrowResult);
        
        // Antipattern 15: Calling @track method
        const methodResult = this.invalidTrackedMethod(); // Calling @track method
        console.log('Method result:', methodResult);
        
        // Antipattern 16: Accessing @track getter/setter
        this.invalidTrackedSetter = 'test value'; // Using @track setter
        const getterValue = this.invalidTrackedGetter; // Using @track getter
        console.log('Getter value:', getterValue);
    }
    
    handleClick() {
        // Antipattern 17: Event handler modifying unnecessary @track properties
        this.primitiveValue = `Updated at ${Date.now()}`; // Unnecessary @track
        this.numberValue++; // Unnecessary @track
        this.booleanValue = !this.booleanValue; // Unnecessary @track
        
        // Antipattern 18: Conditional modification of @track primitives
        if (this.primitiveValue.length > 10) {
            this.primitiveValue = 'short'; // Unnecessary @track
        }
        
        // Antipattern 19: Loop modifying @track primitive
        for (let i = 0; i < 3; i++) {
            this.numberValue += i; // Unnecessary @track in loop
        }
        
        console.log('Updated values:', this.primitiveValue, this.numberValue, this.booleanValue);
    }
    
    // Antipattern 20: @track on static property (if supported)
    @track static staticTracked = 'static'; // Violation: @track on static property
}
