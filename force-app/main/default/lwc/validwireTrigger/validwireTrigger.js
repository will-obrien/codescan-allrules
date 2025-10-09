// This component is generated to trigger the rule: cs-js:valid-wire
import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class validwireTrigger extends LightningElement {
    // Rule: validate @wire usage
    
    // Antipattern 1: @wire on non-function property
    @wire(getRecord) invalidWireProperty; // Violation: @wire on property without function
    
    // Antipattern 2: @wire with invalid adapter
    @wire('invalidAdapter') // Violation: @wire with string instead of function
    invalidAdapterWire;
    
    // Antipattern 3: @wire on method without proper signature
    @wire(getRecord, { recordId: 'invalid' })
    invalidMethodWire() { // Violation: @wire method without proper parameters
        console.log('Invalid wire method');
    }
    
    // Antipattern 4: @wire on getter (invalid usage)
    @wire(getRecord)
    get invalidWireGetter() { // Violation: @wire on getter
        return this._data;
    }
    
    // Antipattern 5: @wire on setter (invalid usage)
    @wire(getRecord)
    set invalidWireSetter(value) { // Violation: @wire on setter
        this._data = value;
    }
    
    // Antipattern 6: @wire with invalid configuration object
    @wire(getRecord, 'invalid-config') // Violation: @wire with string config instead of object
    invalidConfigWire;
    
    // Antipattern 7: @wire with function as config (should be object or function returning object)
    @wire(getRecord, function() { return 'invalid'; }) // Violation: config function returning non-object
    invalidConfigFunctionWire;
    
    connectedCallback() {
        // This component triggers: cs-js:valid-wire
        console.log('Triggering rule: cs-js:valid-wire');
        
        // Antipattern 8: Manually calling @wire method
        this.invalidMethodWire(); // Violation: manually calling @wire method
        
        // Antipattern 9: Accessing @wire property incorrectly
        console.log('Wire property:', this.invalidWireProperty);
        
        // Antipattern 10: Modifying @wire property
        this.invalidWireProperty = { data: 'modified' }; // Violation: modifying @wire property
    }
    
    // Antipattern 11: @wire on arrow function property
    @wire(getRecord, { recordId: '123' })
    arrowWire = (data) => { // Violation: @wire on arrow function
        console.log('Arrow wire data:', data);
    }
    
    // Antipattern 12: @wire method with wrong parameter structure
    @wire(getRecord, { recordId: 'test' })
    wrongParameterWire(data, error) { // Violation: separate data/error params instead of destructured
        console.log('Wrong parameter wire:', data, error);
    }
    
    // Antipattern 13: @wire method with no parameters
    @wire(getRecord, { recordId: 'test' })
    noParameterWire() { // Violation: @wire method without parameters
        console.log('No parameter wire');
    }
    
    // Antipattern 14: @wire method with too many parameters
    @wire(getRecord, { recordId: 'test' })
    tooManyParametersWire(result, extra, params) { // Violation: too many parameters
        console.log('Too many parameters wire:', result, extra, params);
    }
    
    handleClick() {
        // Antipattern 15: Event handler calling @wire methods
        this.wrongParameterWire({ data: 'test' }, null); // Violation: manually calling @wire
        this.noParameterWire(); // Violation: manually calling @wire
        this.tooManyParametersWire({ data: 'test' }, 'extra', 'params'); // Violation
        
        // Antipattern 16: Trying to reassign @wire methods
        this.invalidMethodWire = function() { // Violation: reassigning @wire method
            console.log('Reassigned wire method');
        };
        
        // Antipattern 17: Accessing @wire getter/setter
        this.invalidWireSetter = { data: 'setter data' }; // Violation: using @wire setter
        const getterData = this.invalidWireGetter; // Violation: using @wire getter
        console.log('Wire getter data:', getterData);
    }
    
    // Antipattern 18: @wire on static method (if supported)
    @wire(getRecord, { recordId: 'static' })
    static staticWireMethod(result) { // Violation: @wire on static method
        console.log('Static wire method:', result);
    }
}
