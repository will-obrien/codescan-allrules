// This component triggers VF/Lightning rule: no-return-assign
import { LightningElement } from 'lwc';

export default class noreturnassignTrigger extends LightningElement {
    getValue() {
        var bar = 5;
        // Triggers no-return-assign - assignment in return statement
        return this.foo = bar + 2;
    }
    
    getAnotherValue() {
        // Triggers no-return-assign - compound assignment in return
        return this.count += 1;
    }
}