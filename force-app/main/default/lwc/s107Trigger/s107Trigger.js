// This component triggers SonarJS rule S107
import { LightningElement } from 'lwc';

export default class s107Trigger extends LightningElement {
    connectedCallback() {
        // Noncompliant: Too many parameters (should be max 4)
        function doSomething(param1, param2, param3, param4, param5) {
            // Noncompliant code for S107
            return param1 + param2 + param3 + param4 + param5;
        }
        doSomething(1,2,3,4,5);
    }
}