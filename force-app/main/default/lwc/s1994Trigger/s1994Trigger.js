// This component triggers SonarJS rule S1994
import { LightningElement } from 'lwc';

export default class s1994Trigger extends LightningElement {
    badForLoop() {
        let i, j = 0;
        for (i = 0; i < 10; j++) { // Triggers S1994 - wrong counter incremented
            console.log(i);
            i++; // Counter incremented outside increment clause
        }
    }
}