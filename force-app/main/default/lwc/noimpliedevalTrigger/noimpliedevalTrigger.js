// This component triggers VF/Lightning rule: no-implied-eval
import { LightningElement } from 'lwc';

export default class noimpliedevalTrigger extends LightningElement {
    connectedCallback() {
        // Triggers no-implied-eval - string passed to setTimeout
        setTimeout("alert('Hi!');", 100);
        
        // Triggers no-implied-eval - string passed to setInterval  
        setInterval("console.log('test');", 1000);
        
        // Another violation
        window.setTimeout("this.count = 5", 10);
    }
}