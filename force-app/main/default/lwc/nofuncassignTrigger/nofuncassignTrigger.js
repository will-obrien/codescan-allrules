// This component triggers the no-func-assign rule
import { LightningElement } from 'lwc';

export default class nofuncassignTrigger extends LightningElement {
    connectedCallback() {
        function foo() {}
        foo = "bar"; // Reassigning function declaration - triggers rule
    }
}