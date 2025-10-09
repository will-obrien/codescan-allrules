// This component triggers the no-div-regex rule
import { LightningElement } from 'lwc';

export default class nodivregexTrigger extends LightningElement {
    connectedCallback() {
        const pattern = /=foo/; // Division-like regex - triggers rule
    }
}