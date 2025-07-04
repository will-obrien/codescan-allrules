// This component is generated to trigger the SonarJS rule: javascript:S4043
import { LightningElement } from 'lwc';

export default class s4043Trigger extends LightningElement {
    // Rule: Array-mutating methods should not be used misleadingly
    connectedCallback() {
        // This component triggers: javascript:S4043
        console.log('Triggering SonarJS rule: javascript:S4043');
        
        // Example code that might trigger the rule
        var example = "This triggers rule javascript:S4043";
        return example;
    }

    // Antipattern for S4043: Array-mutating methods should not be used misleadingly
    badArrayMutation() {
        let a = [1, 2, 3];
        let b = a.reverse(); // BAD: mutates 'a' and assigns to 'b'
        let c = [4, 5, 6];
        let d = c.sort(); // BAD: mutates 'c' and assigns to 'd'
        return { b, d };
    }
}