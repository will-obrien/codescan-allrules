// This component triggers SonarJS rule S3786
import { LightningElement } from 'lwc';

export default class s3786Trigger extends LightningElement {
    connectedCallback() {
        var date = new Date();
        console.log("Today is ${date}"); // Triggers S3786 - should use backticks
        var name = "John";
        console.log("Hello ${name}!"); // Triggers S3786
    }
}