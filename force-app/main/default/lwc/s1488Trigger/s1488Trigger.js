// This component triggers SonarJS rule S1488
import { LightningElement } from 'lwc';

export default class s1488Trigger extends LightningElement {
    connectedCallback() {
        // BAD: Declaring a variable only to immediately return it
        function computeDurationInMilliseconds(hours, minutes, seconds) {
            var duration = (((hours * 60) + minutes) * 60 + seconds ) * 1000 ;
            return duration; // Antipattern
        }
        // Usage example
        const ms = computeDurationInMilliseconds(1, 2, 3);
        // ...
    }
    
    computeDurationInMilliseconds() {
        var duration = (((10 * 60) + 30) * 60 + 45) * 1000; // Triggers S1488
        return duration; // Variable declared and immediately returned
    }
    
    getValue() {
        var result = 42; // Triggers S1488
        return result; // Bad practice
    }
}