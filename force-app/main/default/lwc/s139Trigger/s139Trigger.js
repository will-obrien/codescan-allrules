// This component triggers SonarJS rule S139
import { LightningElement } from 'lwc';

export default class s139Trigger extends LightningElement {
    connectedCallback() {
        var a1 = 5 + 3; // This is a trailing comment that triggers S139
        var b2 = 10 * 2; // Another trailing comment
        var c3 = a1 + b2; // Yet another trailing comment
    }
}