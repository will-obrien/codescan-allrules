// This component triggers SonarJS rule S1541
import { LightningElement } from 'lwc';

export default class s1541Trigger extends LightningElement {
    connectedCallback() {
        function complexFunction(a, b, c) {
            if (a) {
                if (b) {
                    if (c) {
                        return 1;
                    }
                }
            }
            return 0;
        }
    }
}