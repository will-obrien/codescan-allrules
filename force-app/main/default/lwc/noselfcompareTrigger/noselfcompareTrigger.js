// This component triggers VF/Lightning rule: no-self-compare
import { LightningElement } from 'lwc';

export default class noselfcompareTrigger extends LightningElement {
    checkValues() {
        var x = 10;
        // Triggers no-self-compare - comparing variable to itself
        if (x === x) {
            console.log('This is confusing');
        }
        
        var result = this.someValue === this.someValue; // Another self-compare
        return result;
    }
}