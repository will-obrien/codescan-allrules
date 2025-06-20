// This component triggers the no-octal-escape rule
import { LightningElement } from 'lwc';

export default class nooctalescapeTrigger extends LightningElement {
    connectedCallback() {
        const foo = "Copyright \251"; // Octal escape - triggers rule
    }
}