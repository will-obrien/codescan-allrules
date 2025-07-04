// This component triggers SonarJS rule S1774
import { LightningElement } from 'lwc';

export default class s1774Trigger extends LightningElement {
    checkValue(a) {
        var b = (a === 'A') ? 'is A' : 'is not A'; // Triggers S1774
        return b;
    }
    
    getStatus(condition) {
        return condition ? 'active' : 'inactive'; // Triggers S1774
    }

    connectedCallback() {
        // BAD: Use of ternary operator
        let a = 'A';
        let b = (a === 'A') ? 'is A' : 'is not A'; // Antipattern
    }
}