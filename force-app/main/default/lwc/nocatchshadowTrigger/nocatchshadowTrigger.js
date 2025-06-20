// This component triggers the no-catch-shadow rule
import { LightningElement } from 'lwc';

export default class nocatchshadowTrigger extends LightningElement {
    connectedCallback() {
        const err = "x";
        try {
            throw "problem";
        } catch (err) { // Shadows outer variable - triggers rule
            // This shadows the outer err variable
        }
    }
}