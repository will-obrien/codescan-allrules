// This component triggers SonarJS rule S100
import { LightningElement } from 'lwc';

export default class s100Trigger extends LightningElement {
    DoSomething() { // Triggers S100 - should be camelCase
        console.log('Bad naming');
    }
    
    Another_Bad_Name() { // Triggers S100 - underscores not allowed
        console.log('Another bad name');
    }

    connectedCallback() {
        function DoSomething() { /* ... */ } // BAD: name does not match convention
    }
}