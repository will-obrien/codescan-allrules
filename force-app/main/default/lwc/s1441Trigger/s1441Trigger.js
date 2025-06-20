// This component triggers SonarJS rule S1441
import { LightningElement } from 'lwc';

export default class s1441Trigger extends LightningElement {
    inconsistentQuotes() {
        var single = 'single quotes';
        var double = "double quotes"; // Triggers S1441 - inconsistent quotes
        var mixed = 'another' + "mixed"; // Triggers S1441
    }
}