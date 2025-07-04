// This component triggers SonarJS rule S3812
import { LightningElement } from 'lwc';

export default class s3812Trigger extends LightningElement {
    badNegation() {
        var myObj = { prop: true };
        var foo = new Date();
        
        if (!"prop" in myObj) { // Triggers S3812
            console.log('Never executes');
        }
        
        if (!foo instanceof Date) { // Triggers S3812
            console.log('Never executes');
        }
    }

    connectedCallback() {
        let myObj = {};
        if (!"prop" in myObj) {  // BAD: "in" operator is checking property "false"
            // ...
        }
        let foo = {};
        if (!foo instanceof Object) {  // BAD: "!foo" returns a boolean, not an object
            // ...
        }
    }
}