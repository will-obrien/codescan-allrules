// This component triggers SonarJS rule S1186
import { LightningElement } from 'lwc';

export default class s1186Trigger extends LightningElement {
    emptyFunction() {
        // Triggers S1186 - empty function
    }
    
    anotherEmptyFunction() {
    }

    connectedCallback() {
        function foo() {
        }
        // BAD: Empty function
        const bar = () => {};
    }
}