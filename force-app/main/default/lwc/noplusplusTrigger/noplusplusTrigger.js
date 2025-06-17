// This component triggers VF/Lightning rule: no-plusplus
import { LightningElement } from 'lwc';

export default class noplusplusTrigger extends LightningElement {
    increment() {
        var foo = 0;
        foo++; // Triggers no-plusplus
        
        var bar = 42;
        bar--; // Another plusplus violation
        
        // In a for loop
        for (var i = 0; i < 10; i++) { // Triggers no-plusplus
            console.log(i);
        }
    }
}