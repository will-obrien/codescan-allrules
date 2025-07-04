// This component triggers SonarJS rule S3760
import { LightningElement } from 'lwc';

export default class s3760Trigger extends LightningElement {
    connectedCallback() {
        let str = "80";
        let quarter = str / 4; // Antipattern: string used in arithmetic
        
        if (str < 10) { // Antipattern: string used in comparison
            console.log('Less than 10');
        }
    }
}