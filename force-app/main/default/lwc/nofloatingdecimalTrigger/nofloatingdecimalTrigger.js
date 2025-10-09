// This component triggers the no-floating-decimal rule
import { LightningElement } from 'lwc';

export default class nofloatingdecimalTrigger extends LightningElement {
    connectedCallback() {
        const num1 = .5; // Missing leading zero - triggers rule
        const num2 = 2.; // Missing trailing zero - triggers rule
        const num3 = -.7; // Missing leading zero - triggers rule
    }
}