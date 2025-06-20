// This component triggers the no-obj-calls rule
import { LightningElement } from 'lwc';

export default class noobjcallsTrigger extends LightningElement {
    connectedCallback() {
        const math = Math(); // Calling Math as function - triggers rule
        const json = JSON(); // Calling JSON as function - triggers rule
    }
}