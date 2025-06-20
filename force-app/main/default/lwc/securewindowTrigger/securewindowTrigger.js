// This component is generated to trigger the rule: cs-js:secure-window
import { LightningElement } from 'lwc';

export default class securewindowTrigger extends LightningElement {
    // Rule: validate window global access
    connectedCallback() {
        // This component triggers: cs-js:secure-window
        console.log('Triggering rule: cs-js:secure-window');
    }
}