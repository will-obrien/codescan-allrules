// This component triggers the no-extend-native rule
import { LightningElement } from 'lwc';

export default class noextendnativeTrigger extends LightningElement {
    connectedCallback() {
        Object.prototype.extra = 55; // Extending native Object - triggers rule
        Array.prototype.customMethod = function() { return 'custom'; }; // Triggers rule
    }
}