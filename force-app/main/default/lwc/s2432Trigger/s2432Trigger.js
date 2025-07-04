// This component triggers SonarJS rule S2432
import { LightningElement } from 'lwc';

export default class s2432Trigger extends LightningElement {
    _name = '';
    
    set name(value) {
        this._name = value;
        return 42; // Antipattern: returning value from setter
    }
    
    get name() {
        return this._name;
    }
}