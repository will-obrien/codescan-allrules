// This component triggers the no-shadow-restricted-names rule
import { LightningElement } from 'lwc';

export default class noshadowrestrictednamesTrigger extends LightningElement {
    connectedCallback() {
        const undefined = "foo"; // Shadows global undefined - triggers rule
        const NaN = 123; // Shadows global NaN - triggers rule
        const Infinity = 456; // Shadows global Infinity - triggers rule
    }
}