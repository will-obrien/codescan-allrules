// This component triggers VF/Lightning rule: new-parens
import { LightningElement } from 'lwc';

export default class newparensTrigger extends LightningElement {
    createObjects() {
        // Triggers new-parens - missing parentheses with new
        var person = new Date; // Should be new Date()
        var arr = new Array; // Should be new Array()
        
        return { person, arr };
    }
}