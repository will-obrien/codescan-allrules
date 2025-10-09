// This component triggers the no-undef rule
import { LightningElement } from 'lwc';

export default class noundefTrigger extends LightningElement {
    connectedCallback() {
        const a = someUndefinedFunction(); // Undefined function - triggers rule
        undefinedVariable = 10; // Undefined variable - triggers rule
    }
}