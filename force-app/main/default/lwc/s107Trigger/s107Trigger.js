// This component triggers SonarJS rule S107
import { LightningElement } from 'lwc';

export default class s107Trigger extends LightningElement {
    connectedCallback() {
        // BAD: Too many parameters
        function doSomething(param1, param2, param3, param4, param5) {
            // ...
        }
    }
}