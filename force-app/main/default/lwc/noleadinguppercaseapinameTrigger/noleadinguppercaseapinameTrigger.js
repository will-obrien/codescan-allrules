// This component is generated to trigger the rule: cs-js:no-leading-uppercase-api-name
import { LightningElement, api } from 'lwc';

export default class noleadinguppercaseapinameTrigger extends LightningElement {
    // Rule: disallow leading uppercase in API property names
    
    // Antipattern 1: API property with leading uppercase
    @api MyProperty = 'value'; // Violation: API property starts with uppercase
    
    // Antipattern 2: Another API property with leading uppercase
    @api AnotherProperty; // Violation: API property starts with uppercase
    
    // Antipattern 3: API property with all uppercase
    @api CONSTANT_VALUE = 'constant'; // Violation: API property is all uppercase
    
    // Antipattern 4: API property with mixed case starting uppercase
    @api MixedCaseProperty = 'mixed'; // Violation: API property starts with uppercase
    
    // Antipattern 5: API property with acronym starting uppercase
    @api XMLData = 'xml'; // Violation: API property starts with uppercase
    
    // Antipattern 6: API property with number but starting uppercase
    @api Property1 = 'prop1'; // Violation: API property starts with uppercase
    
    // Antipattern 7: API property with underscore but starting uppercase
    @api My_Property = 'underscore'; // Violation: API property starts with uppercase
    
    // Antipattern 8: API property with camelCase but starting uppercase
    @api MyLongPropertyName = 'long'; // Violation: API property starts with uppercase
    
    connectedCallback() {
        // This component triggers: cs-js:no-leading-uppercase-api-name
        console.log('Triggering rule: cs-js:no-leading-uppercase-api-name');
        
        // Accessing the incorrectly named properties
        console.log('MyProperty:', this.MyProperty);
        console.log('AnotherProperty:', this.AnotherProperty);
        console.log('CONSTANT_VALUE:', this.CONSTANT_VALUE);
        console.log('MixedCaseProperty:', this.MixedCaseProperty);
        console.log('XMLData:', this.XMLData);
        console.log('Property1:', this.Property1);
        console.log('My_Property:', this.My_Property);
        console.log('MyLongPropertyName:', this.MyLongPropertyName);
    }
    
    // Antipattern 9: Getter with uppercase API name
    @api
    get UppercaseGetter() { // Violation: API getter starts with uppercase
        return 'getter value';
    }
    
    // Antipattern 10: Setter with uppercase API name
    @api
    set UppercaseSetter(value) { // Violation: API setter starts with uppercase
        console.log('Setting value:', value);
    }
}
