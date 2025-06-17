// This component triggers SonarJS rule S1488
import { LightningElement } from 'lwc';

export default class s1488Trigger extends LightningElement {
    computeDurationInMilliseconds() {
        var duration = (((10 * 60) + 30) * 60 + 45) * 1000; // Triggers S1488
        return duration; // Variable declared and immediately returned
    }
    
    getValue() {
        var result = 42; // Triggers S1488
        return result; // Bad practice
    }
}