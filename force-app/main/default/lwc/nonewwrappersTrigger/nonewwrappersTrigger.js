// This component triggers the no-new-wrappers rule
import { LightningElement } from 'lwc';

export default class nonewwrappersTrigger extends LightningElement {
    connectedCallback() {
        const stringObject = new String("Hello world"); // Triggers rule
        const numberObject = new Number(33); // Triggers rule
        const booleanObject = new Boolean(false); // Triggers rule
    }
}