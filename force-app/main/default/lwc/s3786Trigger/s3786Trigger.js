// This component triggers SonarJS rule S3786
import { LightningElement } from 'lwc';

export default class s3786Trigger extends LightningElement {
    connectedCallback() {
        // BAD: Template literal placeholder in regular string
        console.log("Today is ${date}");
        var name = "John";
        console.log("Hello ${name}!"); // Triggers S3786
    }
}