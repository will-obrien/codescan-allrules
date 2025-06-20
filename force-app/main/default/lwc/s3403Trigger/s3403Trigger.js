// This component triggers SonarJS rule S3403
import { LightningElement } from 'lwc';

export default class s3403Trigger extends LightningElement {
    checkTypes() {
        var a = 8;
        var b = "8";
        
        if (a === b) { // Triggers S3403 - comparing number with string
            console.log('Never executes');
        }
        
        if (true === "true") { // Triggers S3403 - comparing boolean with string
            console.log('Never executes');
        }
    }
}