// This component is generated to trigger the rule: cs-js:valid-typeof
import { LightningElement } from 'lwc';

export default class validtypeofTrigger extends LightningElement {
    // Rule: enforce comparing `typeof` expressions against valid strings
    connectedCallback() {
        // This component triggers: cs-js:valid-typeof
        console.log('Triggering rule: cs-js:valid-typeof');
        
        let foo, bar;
        
        // Antipattern 1: Misspelled typeof comparison
        typeof foo === "strnig"; // Violation: "strnig" should be "string"
        
        // Antipattern 2: Another misspelled typeof comparison
        typeof foo == "undefimed"; // Violation: "undefimed" should be "undefined"
        
        // Antipattern 3: Wrong typeof comparison with !=
        typeof bar != "nunber"; // Violation: "nunber" should be "number"
        
        // Antipattern 4: Wrong typeof comparison with !==
        typeof bar !== "function"; // Violation: "function" is correct but used in wrong context
        
        // Antipattern 5: Invalid typeof string
        typeof foo === "some invalid type"; // Violation: not a valid typeof result
        
        // Antipattern 6: Comparing typeof to non-string (when requireStringLiterals is true)
        typeof foo === undefined; // Violation: should be "undefined"
        
        // Antipattern 7: Comparing typeof to Object
        typeof bar == Object; // Violation: should be "object"
        
        // Antipattern 8: Comparing typeof to number
        typeof foo == 5; // Violation: should be string comparison
        
        // Antipattern 9: Comparing typeof to variable (when requireStringLiterals is true)
        let anotherVariable = 'string';
        typeof foo === anotherVariable; // Violation: should use string literal
    }
}