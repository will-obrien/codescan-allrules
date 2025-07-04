// This component is generated to trigger the SonarJS rule: javascript:S881
import { LightningElement } from 'lwc';

export default class s881Trigger extends LightningElement {
    // Rule: Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression
    connectedCallback() {
        // This component triggers: javascript:S881
        console.log('Triggering SonarJS rule: javascript:S881');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S881";
        return example;
    }

    // Antipattern for S881: Increment (++) and decrement (--) operators should not be used in a method call or mixed with other operators in an expression
    badIncrementDecrement() {
        let u8a = ++this.u8b + this.u8c--;
        let foo = this.bar++ / 4;
        return { u8a, foo };
    }
}