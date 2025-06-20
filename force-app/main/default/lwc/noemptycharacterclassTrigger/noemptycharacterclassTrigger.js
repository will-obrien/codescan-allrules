// This component triggers the no-empty-character-class rule
import { LightningElement } from 'lwc';

export default class noemptycharacterclassTrigger extends LightningElement {
    connectedCallback() {
        const pattern = /^abc[]/; // Empty character class - triggers rule
        const result = pattern.test("abcdefg");
    }
}