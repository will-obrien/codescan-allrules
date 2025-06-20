// This component triggers the no-implied-eval rule
import { LightningElement } from 'lwc';

export default class noimpliedevalTrigger extends LightningElement {
    connectedCallback() {
        setTimeout("alert('Hi!');", 100); // String in setTimeout - triggers rule
        setInterval("console.log('test');", 1000); // String in setInterval - triggers rule
    }
}