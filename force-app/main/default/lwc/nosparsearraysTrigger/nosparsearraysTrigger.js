// This component triggers VF/Lightning rule: no-sparse-arrays
import { LightningElement } from 'lwc';

export default class nosparsearraysTrigger extends LightningElement {
    connectedCallback() {
        // Triggers no-sparse-arrays - arrays with holes
        var items = [,,]; // Sparse array with empty slots
        var colors = ["red",, "blue"]; // Another sparse array
        
        console.log('Items length:', items.length);
        console.log('Colors:', colors);
    }
}