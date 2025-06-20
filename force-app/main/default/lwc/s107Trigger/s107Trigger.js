// This component triggers SonarJS rule S107
import { LightningElement } from 'lwc';

export default class s107Trigger extends LightningElement {
    // Triggers S107 - too many parameters (more than 4)
    doSomething(param1, param2, param3, param4, param5, param6) {
        console.log(param1, param2, param3, param4, param5, param6);
    }
}