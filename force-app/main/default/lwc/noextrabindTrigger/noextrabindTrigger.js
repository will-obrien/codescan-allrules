// This component triggers the no-extra-bind rule
import { LightningElement } from 'lwc';

export default class noextrabindTrigger extends LightningElement {
    connectedCallback() {
        const x = function () {
            return "ESLint";
        }.bind({ name: "ESLint" }); // Unnecessary bind - triggers rule
        
        const y = (() => {
            return "test";
        }).bind(this); // Arrow function with bind - triggers rule
    }
}