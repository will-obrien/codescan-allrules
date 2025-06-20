// This component triggers the no-control-regex rule
import { LightningElement } from 'lwc';

export default class nocontrolregexTrigger extends LightningElement {
    connectedCallback() {
        const pattern1 = /\x1f/; // Control character in regex - triggers rule
        const pattern2 = new RegExp("\x1f"); // Control character - triggers rule
    }
}