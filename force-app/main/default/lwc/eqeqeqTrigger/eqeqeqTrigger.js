// This component triggers VF/Lightning rule: eqeqeq
import { LightningElement } from 'lwc';

export default class eqeqeqTrigger extends LightningElement {
    checkEquality() {
        var x = 42;
        var text = "test";
        
        // Triggers eqeqeq - should use === instead of ==
        if (x == 42) {
            console.log('Found match');
        }
        
        if ("" == text) { // Another == violation
            console.log('Empty text');
        }
        
        if (this.someValue != undefined) { // Should use !==
            console.log('Has value');
        }
    }
}