// This component triggers the wrap-iife rule
import { LightningElement } from 'lwc';

export default class wrapiifeTrigger extends LightningElement {
    connectedCallback() {
        const x = function () { return { y: 1 }; }(); // Unwrapped IIFE - triggers rule
    }
}