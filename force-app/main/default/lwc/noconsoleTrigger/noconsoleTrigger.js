// This component triggers the no-console rule
import { LightningElement } from 'lwc';

export default class noconsoleTrigger extends LightningElement {
    connectedCallback() {
        console.log('This console.log triggers the no-console rule'); // Violation
        console.error('Error message'); // Violation
        console.warn('Warning message'); // Violation
    }
}