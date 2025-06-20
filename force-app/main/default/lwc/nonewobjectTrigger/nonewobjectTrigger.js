// This component triggers the no-new-object rule
import { LightningElement } from 'lwc';

export default class nonewobjectTrigger extends LightningElement {
    connectedCallback() {
        const myObject = new Object(); // Triggers rule - should use {}
        const anotherObject = new Object; // Triggers rule
    }
}