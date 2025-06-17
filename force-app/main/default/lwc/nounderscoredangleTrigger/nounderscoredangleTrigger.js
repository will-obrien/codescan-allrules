// This component triggers VF/Lightning rule: no-underscore-dangle
import { LightningElement } from 'lwc';

export default class nounderscoredangleTrigger extends LightningElement {
    connectedCallback() {
        // Triggers no-underscore-dangle - dangling underscores
        var foo_ = 'trailing underscore';
        var _bar = 'leading underscore';
        
        this._privateMethod(); // Method with underscore
        this.value_ = 'another trailing underscore';
    }
    
    _privateMethod() {
        console.log('Private method with underscore');
    }
}