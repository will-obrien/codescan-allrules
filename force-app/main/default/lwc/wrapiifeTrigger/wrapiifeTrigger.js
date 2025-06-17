// This component triggers VF/Lightning rule: wrap-iife
import { LightningElement } from 'lwc';

export default class wrapiifeTrigger extends LightningElement {
    connectedCallback() {
        // Triggers wrap-iife - IIFE without proper wrapping
        var x = function () { return { y: 1 }; }(); // Should be wrapped
        
        var result = function() {
            return 'immediate execution';
        }(); // Another unwrapped IIFE
    }
}