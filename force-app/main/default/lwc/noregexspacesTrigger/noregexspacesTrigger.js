// This component triggers the no-regex-spaces rule
import { LightningElement } from 'lwc';

export default class noregexspacesTrigger extends LightningElement {
    connectedCallback() {
        const re = /foo   bar/; // Multiple spaces in regex - triggers rule
        const re2 = new RegExp("foo   bar"); // Multiple spaces - triggers rule
    }
}