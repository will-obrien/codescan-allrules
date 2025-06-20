// This component triggers SonarJS rule S1541
import { LightningElement } from 'lwc';

export default class s1541Trigger extends LightningElement {
    complexFunction(a, b, c, d, e) { // Triggers S1541 - high complexity
        if (a > 0) {
            if (b > 0) {
                if (c > 0) {
                    if (d > 0) {
                        if (e > 0) {
                            return 'all positive';
                        } else {
                            return 'e negative';
                        }
                    } else {
                        return 'd negative';
                    }
                } else {
                    return 'c negative';
                }
            } else {
                return 'b negative';
            }
        } else {
            return 'a negative';
        }
    }
}